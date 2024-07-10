const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111240210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_43_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVGcC9mdkZuV1hQeGU2NUlkYmRnZXpBQjdxaTYvSGdVWkUvWEdGVmozZWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNKSURuSk9zUTZpeXN4MHpBaFJiS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTcwZGM2ZmYtMDNmNy00MjBiLWFjMWUtMjAwMjQzZGUxY2Q5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgODksXG4gICAgICAxMjgsXG4gICAgICAxMjQsXG4gICAgICAxOCxcbiAgICAgIDkxLFxuICAgICAgMjMzLFxuICAgICAgODgsXG4gICAgICAxLFxuICAgICAgMTc1LFxuICAgICAgMTQwLFxuICAgICAgMTYsXG4gICAgICAxODgsXG4gICAgICAxODAsXG4gICAgICAxMDEsXG4gICAgICAxMDYsXG4gICAgICAxMTMsXG4gICAgICAxNjUsXG4gICAgICAxNCxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxMTAsXG4gICAgICAxMzEsXG4gICAgICAyMDgsXG4gICAgICA4NSxcbiAgICAgIDQxLFxuICAgICAgMTQsXG4gICAgICAxNDIsXG4gICAgICAyMzksXG4gICAgICAxNzMsXG4gICAgICAxODcsXG4gICAgICAxOTQsXG4gICAgICAyMjgsXG4gICAgICAxNjgsXG4gICAgICAyMzksXG4gICAgICA3NyxcbiAgICAgIDk3LFxuICAgICAgMzMsXG4gICAgICA4LFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjdyeVk4RkVNYVF1N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXdENTT3hOY0tqZ2ZEaDFKczh1RHNOMEhxRDF4RGVVWnVkUGtES3NCYjBvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF6SnJkcW40UkJBanhNNnJBTCtxSUYyR3NSMFZnMGlRbUNNZmxUYmNacGhSZEdaQmlaL2dzSGZUaElxemJEd3dQUFpIRzdQeXI5R2FHTE9VV0F3RURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdieVMyQlcyRVFTNVRGdnZNRlhJTEl0b20zdUVTc1QyNkYxekIzOUNFdTFJREMvVmF4UTZNRk1XbzhEZi9aZGdpcTJ4RGtZcWhPcUN3VTg4VURPRkNRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Njg1ODQyMjc3OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMDYzNjEzNTk2NDg2OToyMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY4NTg0MjI3NzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MzM0MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNMHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0wdy5qc29uIjogIntcImtleURhdGFcIjpcIm5RQWdONWljalZmNHB6Z21MWW1jeGF0c0pzUXpiTFNxZTMwSzJYVlprRlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3NDg0NDMxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MzkzOTM2MzgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
