import axios from 'axios';

export function user_info (authType: any, access_token: any){ 
    return axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: {
        "Authorization": `${authType} ${access_token}`,
        "Accept": "application/json"
      }
    });
  }
