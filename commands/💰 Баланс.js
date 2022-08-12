/*CMD
  command: 💰 Баланс
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceReg = Libs.ResourcesLib.userRes("balanceReg");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var lib = Libs.ReferralLib;
var refList = lib.currentUser.refList.get();
let stat = Bot.getProperty(""+user.telegramid+"");
var s;
if (stat=="partner"){
 s = "✅ Верифицирован";
} else {
 s = "❌ Не верифицирован";
}
Bot.sendMessage("🌐 Статус: "+ s + "\n\n💰 Баланс : "+balanceAll.value().toFixed(2)+" $\n\n🌀Приглашай и зарабатывай🌀");
