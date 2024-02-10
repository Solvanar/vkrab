import request from '../request';

export default function getChat(id: string) {
  return request('messages.getHistory', {
    chat_id: id,
  });
}
