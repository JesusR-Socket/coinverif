/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*var button = [{ title : "✅ПРОВЕРИТЬ" , command : "✅ПРОВЕРИТЬ" }]

Bot.sendInlineKeyboard(button , "📱 Подпишись на наш телеграмм канал чтобы следить за новостями: \n\n➤ https://t.me/coinList_official1"); */
Bot.sendMessage("📱 Подпишись на наш телеграмм канал чтобы следить за новостями: \n\n➤ https://t.me/coinList_official1");
function hello(message) {
var greetings = "";

Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*Вы не можете пригласить самого себя ❌*");
}

function doAttracted(channel) {
hello("Referal: " + channel);
}

function doAtractedByUser(refUser) {
hello("");
refUser = Libs.ReferralLib.getAttractedBy().telegramid;
Bot.setProperty("referral:"+user.telegramid,refUser,"string");
}

function doAlreadyAttracted(){
Bot.sendMessage("*Вы уже запустили бота ❌*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
Bot.runCommand("check");

