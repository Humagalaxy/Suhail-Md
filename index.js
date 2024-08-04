const express = require('express');
const { Client, logger } = require('./lib/client');
const { DATABASE, VERSION } = require('./config');
const { stopInstance } = require('./lib/pm2');
const pm2 = require('pm2');

const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

// Port configuration
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Function to perform periodic task
function performPeriodicTask() {
    console.log('Performing periodic task');
    // Add your task logic here
}

// Set an interval to perform the task every 5 minutes (300,000 milliseconds)
setInterval(performPeriodicTask, 300000); // 5 minutes

const start = async () => {
  logger.info(`levanter ${VERSION}`);
  try {
    await DATABASE.authenticate({ retry: { max: 3 } });
  } catch (error) {
    console.error('Unable to connect to the database:', error.message, process.env.DATABASE_URL);
    return stopInstance();
  }
  try {
    logger.info('Database syncing...');
    await DATABASE.sync();
    const bot = new Client();
    await bot.init();
    await bot.connect();
  } catch (error) {
    logger.error(error);
  }
};

start();

// Global error handler
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    stopInstance();
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    stopInstance();
    process.exit(1);
});

// Function to stop the PM2 instance
const stopInstance = () => {
  pm2.connect(err => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    pm2.stop('Suhail', (err, proc) => {
      pm2.disconnect();
      if (err) throw err;
    });
  });
};

module.exports = { stopInstance };
