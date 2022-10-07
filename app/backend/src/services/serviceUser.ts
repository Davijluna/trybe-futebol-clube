// import * as jwt from 'jsonwebtoken';
import createToken from '../middleware/middlewareToken';
// import * as bcrypt from 'bcryptjs';
import User from '../database/models/User';
import IUser from '../entities/IUser';
import 'dotenv/config';

export default class UserServices {
  static login = async (user: IUser) => {
    const { email, password } = user;
    const getUser = await User.findOne({ where: { email } });
    if (!getUser) {
      return { erro: { message: 'Incorrect email or password' }, code: 401 };
    }
    // const password = await bcrypt.compare(password, getUser.password);
    if (!password) {
      return { erro: { message: 'Incorrect email or password' }, code: 401 };
    }
    const token = createToken(user.email);
    return { data: token, code: 200 };
  };

  // verificLogin = async (token: string | undefined) => {
  //   if (!token) {
  //     return { error: { message:'Token not found', code: 401 } };
  //      }
  //     const test = checkToken(token) ;
  //     const userf = await User.findOne(test.token);
  //     if (!userf) {
  //       return { error: { message:'token invalido', code: 401 } };
  //   }
  //   return token
  //   }
}
