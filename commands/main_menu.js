/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");
if (stat =="partner"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 Баланс,👫 Партнёры\n📄 Информация,💸 Вывод", "🌀Приглашай и зарабатывай🌀")
} else if (stat=="user" | stat =="member"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 Баланс,👫 Партнёры\n📄 Информация,💸 Вывод\n✅ Верификация (18+)", "🌀Приглашай и зарабатывай🌀")
} else if (stat=="creator" | stat=="admin"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 Баланс,👫 Партнёры\n📄 Информация,💸 Вывод\n✅ Верификация (18+)\nВерифицировать пользователя,Добавить админа,test,test2", "🌀Приглашай и зарабатывай🌀")
}
if (user=="left"){
Bot.runCommand("/start");
}
