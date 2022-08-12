/*CMD
  command: 💸 Вывод
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("Вы забанены")
}else {
var button1 = [{ title : "USTD (TRC-20)" , command : "wallet" }]
var button3 = [{ title : "Банки России" , command : "rf" }]
var button4 = [{ title : "Банки Беларуси" , command : "rb" }]
var button5 = [{ title : "Банки Украины" , command : "uk" }]
var button6 = [{ title : "Банки Казахстана" , command : "ks" }]
var button7 = [{ title : "Моментальный вывод -20%" , command : "mom" }]

Bot.sendInlineKeyboard([button1, button3, button4, button5, button6, button7], "Минимальная сумма для вывода: 4$");
}
