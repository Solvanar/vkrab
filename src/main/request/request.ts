import axios from 'axios';
import { SETTINGS } from '../tokensData';

export default async function request(
  method: string,
  params: object,
): Promise<Error | any> {
  let error: Error = new Error();
  const response = await axios.post(
    `https://api.vk.com/method/${method}`,
    new URLSearchParams({
      'v': SETTINGS.apiVersion,
      'access_token': SETTINGS.token,
      'user_id': SETTINGS.userId,
      ...params,
    }),
    {
      headers: {
        'User-Agent': SETTINGS.userAgent
      }
    }
  ).catch((err: Error) => {
    error = err
  });

  return error || response?.data;
};
