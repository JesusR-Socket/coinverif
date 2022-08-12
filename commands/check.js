/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var users = User.getProperty("status");

/* if (user.telegramid == 1784296703){
User.setProperty("status" , "member", "string");
Bot.setProperty("" +user.telegramid+ "" , "partner")
Bot.runCommand("main_menu")
User.addToGroup("user")
} else */ if (users=="member" | users=="user"){
var mp = Bot.getProperty("" +user.telegramid+ "");
if (mp == "partner"){
Bot.setProperty("" +user.telegramid+"" , "partner");
}
else{
Bot.setProperty("" +user.telegramid+"" , "user");
}
Bot.runCommand("main_menu")
User.addToGroup("user")
} else if (users=="creator"){
Bot.setProperty("" +user.telegramid+ "" , "creator")
Bot.runCommand("main_menu")
User.addToGroup("user")
} else if (users=="administrator"){
Bot.setProperty("" +user.telegramid+ "" , "admin")
Bot.runCommand("main_menu")
User.addToGroup("user")
} else {
Bot.setProperty("" +user.telegramid+ "" , "member")
Bot.runCommand("main_menu")
User.addToGroup("user")
}
