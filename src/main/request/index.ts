import getChat from './messages/getChat';

export const grab = async (chatId: string) => {
  const chatInfo = await getChat(chatId);
  console.log('chatInfo', chatInfo);
  return chatInfo;
}
