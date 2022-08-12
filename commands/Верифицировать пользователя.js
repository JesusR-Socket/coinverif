/*CMD
  command: Верифицировать пользователя
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Telegram ID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
var referral = Bot.getProperty("referral:"+id);
var referral2 = Bot.getProperty("referral:"+referral);
var referral3 = Bot.getProperty("referral:"+referral2);

let stat = Bot.getProperty(""+id+"");
if (stat != "ban"){
 Bot.sendMessageToChatWithId(id, "Вы успешно верифицированы!");
 Bot.setProperty(""+id+"", "partner");
}

var balanceAll = Libs.ResourcesLib.anotherUserRes("balanceAll", id);
var balanceReg = Libs.ResourcesLib.anotherUserRes("balanceReg", id);
balanceAll.add(4);
balanceReg.add(4);

if (referral != "undefined"){
var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral);
var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral);
balanceRefAll.add(6);
balanceRef.add(6);
Bot.sendMessageToChatWithId(referral, "🏧 Новый реферал : +6.0 $");
}

if (referral2 != "undefined"){
var balanceRefAll2 = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2);
var balanceRef2 = Libs.ResourcesLib.anotherUserRes("balance2", referral2);
balanceRefAll2.add(3);
balanceRef2.add(3);
Bot.sendMessageToChatWithId(referral2, "🏧 Новый реферал : +3.0 $");
}

if (referral3 != "undefined"){
var balanceRefAll3 = Libs.ResourcesLib.anotherUserRes("balanceAll", referral3);
var balanceRef3 = Libs.ResourcesLib.anotherUserRes("balance3", referral3);
balanceRefAll3.add(1);
balanceRef3.add(1);
Bot.sendMessageToChatWithId(referral3, "🏧 Новый реферал : +1.0 $");
}


