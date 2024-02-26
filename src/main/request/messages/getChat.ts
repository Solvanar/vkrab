import request from '../request';

export const getChat = async (id: string) => {
  return await request('messages.getChat', {
    chat_id: id,
  });
}
