/*CMD
  command: Ask
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" , data.message ,"string")
Bot.sendMessage("*📩 Ваше вопрос к администрации :* "+data.message+"")
