import { getConversations, grabChat } from './request';
import { Conversation } from '../definitions/messages';

const conversations = (): Promise<Conversation[] | unknown> => {
  return getConversations();
}
const grab = async (id: string): Promise<Conversation | unknown> => {
  return await grabChat(id)
}

export default {
  'getConversations': conversations,
  'grab': grab,
}
