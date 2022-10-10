// import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express' //
import { createToken, checkToken } from '../middleware/middlewareToken'; //
import * as bcrypt from 'bcryptjs'; //
import User from '../database/models/User'; //
import IUser from '../entities/IUser';
import 'dotenv/config';
import PayloadToken from '../entities/Itoken';
import { verify } from 'jsonwebtoken';
import { any } from 'sequelize/types/lib/operators';

export default class UserServices {
  static login = async (user: IUser) => {
    const { email } = user;
    const { password } = user;
    const getUser = await User.findOne({ where: { email} });
    if(!getUser) {
     return { erro: { message: 'Incorrect email or password' }, code: 401 };
    }
    const test = await bcrypt.compare(password, getUser.password);
    if (!test) {
      return { erro: { message: 'Incorrect email or password' }, code: 401 }
    }
    const token = createToken(user.email);
    return { data: token, code: 200 };
  };

  static tokenValidation = async (token: any) => {
    const { email } = verify(token, 'jwt_secret') as PayloadToken;  // 
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
        return { erro: { message: 'not token' }, code: 401 };
    }
    return { role: user.role }
    // if (!token) {
    // }
    // try {
    //   const vetiTok = checkToken(token);
    //   const usuario = await UserServices.login(vetiTok.email);
    //   return res.status(200).json({ role: usuario.data  });
    // } catch (erro) {
    //   res.status(401).json({ message: 'Invalid token' });
    // }
    // return { role: token.role };
    
  };
  
}
// const user = await User.findOne({ where: { email } });
// const { email } = verify(token, 'jwt_secret') as PayloadToken;
// const { email } = token
// const verifyToken = checkToken(token) as User
// const user = await 
//   const { token1 } = token;
//   const tokenTest = checkToken(token.token1);
//   if (!tokenTest) {}