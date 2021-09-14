import axios from 'axios'


const invalidRequest = (res: any) =>
  (!res.data || (res.status === 'failure') || res.msg)

export default async (url: string, payload: any) => {
  try {
    const res = await axios.post(url, payload);
    if (invalidRequest(res.data))
      throw new Error('My Axios Wrapper: Handled Error');
    return res.data.data;  
  } catch (er: any) {
    console.error(er);
    throw new Error(er);
  }
}