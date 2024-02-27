import request from '../request';
import { Conversation } from '@definitions/messages';

export const getChat = async (id: string): Promise<Conversation | Error> => {
  return await request('messages.getChat', {
    chat_id: id,
  });
}
