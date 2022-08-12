/*CMD
  command: test
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: teleram id:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
var referral = Bot.getProperty("referral:"+id);
var referral2 = Bot.getProperty("referral:"+referral);
var referral3 = Bot.getProperty("referral:"+referral2);

if (refferal != "undefined"){
var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral);
var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral);
balanceRefAll.add(6);
balanceRef.add(6);
Bot.sendMessageToChatWithId(referral, "🏧 Новый реферал : +6.0 $");
}

if (refferal2 != "undefined"){
var balanceRefAll2 = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2);
var balanceRef2 = Libs.ResourcesLib.anotherUserRes("balance2", referral2);
balanceRefAll2.add(3);
balanceRef2.add(3);
Bot.sendMessageToChatWithId(referral2, "🏧 Новый реферал : +3.0 $");
}

if (refferal3 != "undefined"){
var balanceRefAll3 = Libs.ResourcesLib.anotherUserRes("balanceAll", referral3);
var balanceRef3 = Libs.ResourcesLib.anotherUserRes("balance2", referral3);
balanceRefAll3.add(1);
balanceRef3.add(1);
Bot.sendMessageToChatWithId(referral3, "🏧 Новый реферал : +1.0 $");
}
