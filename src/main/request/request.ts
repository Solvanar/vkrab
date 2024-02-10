import axios from 'axios';

export default async function request(
  method: string,
  params: object,
): Promise<Error | any> {
  let error: Error = new Error();
  const response = await axios.post(
    `https://api.vk.com/method/${method}`, //messages.getHistory
    new URLSearchParams({
      'v': '5.131',
      'access_token': 'test',
      'user_id': 'test',
      ...params,
    }),
    {
      headers: {
        'User-Agent': 'test'
      }
    }
  ).catch((err: Error) => {
    error = err
  });

  return error || response?.data;
};
