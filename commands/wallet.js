/*CMD
  command: wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📌 Пожалуйста введите Ваш платёжный кошелёк для вывода USDT (TRC-20)
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("PaytmWallet");
User.setProperty("PaytmWallet" , data.message ,"string");
Bot.sendMessage("✅ Ваш платёжный кошелек :* "+data.message+"");
Bot.runCommand("usdt")
