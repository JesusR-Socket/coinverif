/*CMD
  command: usdt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("PaytmWallet")
if(wallet == undefined ){
Bot.sendMessage("_❌ Кошелек не установлен_")
} else{
if (balance.value() < -1){
Bot.sendMessage("_❌ На счету должно быть 4$!_")
}else{
Bot.sendMessage("*💵 Введите сумму в $*")
Bot.runCommand("auto")
}
}
