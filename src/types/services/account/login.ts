import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../../config/index'
import {user_info} from '../../middleWare/googleAuth'
import User from '../../models/mysql/User';

export default async (req: any, res: any, next: any) => {
  try {
    const { authorization } = req.headers

    if (!authorization) throw new Error('You must send an Authorization header')

    const [authType, access_token] = authorization.trim().split(' ')
    const user = user_info(authType, access_token)
      .then( async ({...profile}) => {
        const { email }  = profile.data.email;
        const user = await User.findOne({
          where: { email }
        })
        if (user) {
          return user
        }else {
          const user = await User.create({
            email,
            name: email,
          })
          return user
        }
      });
      const tokenExp = { exp: Math.floor(Date.now() / 1000) + 60 * 60 };
      const data = Object.assign({}, user, tokenExp);
      const token = jwt.sign(data, SECRET_KEY);
      return res.status(200).send({Authorization: token});    
  }catch (error) {
    next(error.message)
  }
};

