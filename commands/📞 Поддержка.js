/*CMD
  command: 📞 Поддержка
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
var button = [{ title : "✏️Напишите Ваш вопрос" , command : "Ask" }]
Bot.sendInlineKeyboard(button , "*📫 Последний вопрос :* "+Ask+"")
