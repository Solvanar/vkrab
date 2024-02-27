import axios from 'axios';
import { SETTINGS } from './tokensData';

// TODO: починить any
export default async function request(
  method: string,
  params: object,
): Promise<Error | any> {
  let response;
  try {
    response = await axios.post(
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
    )

  } catch(err) {
    console.log(err)
  }

  return response?.data;
};
