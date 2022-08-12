/*CMD
  command: send2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Ваш ID:");
Bot.sendMessage(user.telegramid);
Bot.sendMessage("Отправить данные необходимо сюда: @teh_podderzka");

Bot.runCommand("main_menu");
