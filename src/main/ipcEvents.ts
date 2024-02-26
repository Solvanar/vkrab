import { getConversations, grabChat } from './request';
import { Conversation } from '../definitions/messages';

const conversations = (): Promise<Conversation[] | Error> => {
  return getConversations();
}
const grab = async (id: string): Promise<Conversation | Error> => {
  return await grabChat(id)
}

export default {
  'getConversations': conversations,
  'grab': grab,
}
