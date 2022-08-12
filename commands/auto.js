/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("PaytmWallet");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");

if(data.message < 4 ){
Bot.sendMessage("_❌ Минимальный вывод 4$_")
}else{
if(data.message > balanceAll.value()){
Bot.sendMessage("_❌ Максимальный вывод "+balanceAll.value().toFixed(2)+" $_")
}else{
Bot.sendMessage("✅ Запрос отправлен\n\n💳 Детали транзакции :\n 💰Сумма : "+data.message+" $\n💼 Кошелёк : "+wallet+"\n\n⛔️ Вывод может занимать до 5 дней!")
balanceAll.add(-data.message)
Api.sendMessage({ 
chat_id: "-1001506519468", 
text: "*🔋 Новый подтверждённый платеж\n\n▪️ Статус : Подтверждён\n▪️ Id :* "+user.telegramid+"\n*▪️ Сумма :* "+data.message+" USDT\n\n*♦️ Кошелёк ♦️\n "+wallet+"\n\n✅ Бот @coinverif_bot*" , 
parse_mode: "Markdown"})
}
}
