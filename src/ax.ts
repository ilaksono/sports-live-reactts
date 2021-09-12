import axios from 'axios'


const validateRequest = (res: any) =>
  res.data || (res.status === 'success') || res.msg

export default async (url: string, payload: any) => {
  try {
    const res = await axios.post(url, payload);
    if (!validateRequest(res.data))
      throw new Error();
    return res.data.data;  
  } catch (er: any) {
    console.error(er);
    throw new Error(er);
  }
}