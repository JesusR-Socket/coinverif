/*CMD
  command: ✅ПОДТВЕРДИТЬ
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");
if (stat=="user" | stat=="member"){
 Bot.sendMessage("Вы успешно верифицированы!");
 Bot.setProperty(""+user.telegramid+"", "partner");
}

Bot.runCommand("main_menu");
