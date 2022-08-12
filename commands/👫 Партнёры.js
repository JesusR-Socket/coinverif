/*CMD
  command: 👫 Партнёры
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*Вы заблокированы*");
}else{

var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("coinverif_bot","Bot");
let lib = Libs.ReferralLib;
var refList = Libs.ReferralLib.getRefCount();

Bot.sendMessage("👥 Партнеров 1 линии: "+balance.value().toFixed(2)/6+" : "+balance.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 2 линии: "+balance2.value().toFixed(2)/3+" : "+balance2.value().toFixed(2)+"$ заработано\n\n👥 Партнеров 3 линии: "+balance3.value().toFixed(2)/1+" : "+balance3.value().toFixed(2)+"$ заработано\n\n🔗 Ссылка для приглашения\n"+reflink+"");

}
