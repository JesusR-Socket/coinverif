/*CMD
  command: Добавить админа
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Telegram ID:
  keyboard: 
  aliases: 
CMD*/

var userId = message;

Bot.setProperty("" +userId+ "" , "admin")

Bot.sendMessage("" +userId+ " теперь admin")
