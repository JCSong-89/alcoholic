import jwt from 'jsonwebtoken';
import axios from 'axios';

export default async (req: any, res: any, next: any) => {
  try {
    const { authorization } = req.headers

    if (!authorization) throw new Error('You must send an Authorization header')

    const [authType, access_token] = authorization.trim().split(' ')
    const api_request = axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: {
        "Authorization": `${authType} ${access_token}`,
        "Accept": "application/json"
      }});
    console.log(api_request);
  }catch (error) {
    next(error.message)
  }
};

