/*CMD
  command: 📄 Информация
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button1 = [{ title : "💸 Как заработать?" , command : "1b" }]
var button2 = [{ title : "✔ Что такое ВЕРИФИКАЦИЯ?" , command : "2b" }]
var button3 = [{ title : "💻 Мои данные в безопасности?" , command : "3b" }]
var button4 = [{ title : "💵 Откуда берутся деньги?" , command : "4b" }]
var button5 = [{ title : "📔 Условия" , command : "5b" }]
var button6 = [{ title : "💰 Сколько я могу заработать?" , command : "6b" }]
var button7 = [{ title : "👉 Статусы верификации? 👈" , command : "7b" }]
var button9 = [{ title : "👨‍💻 Тех. Поддержка" , command : "9b" }]

Bot.sendInlineKeyboard([button1, button2, button3, button4, button5, button6, button7, button9] , "*Мы собрали ответы на часто задаваемые вопросы 📝*")
