import User from '../database/models/User';
import IUser from '../entities/IUser';

export default class UserServices {
  static async create(Login: IUser): Promise<IUser> {
    if (!Login.email) {
      throw new Error('e-mail não consta');
    }
    if (!Login.password) {
      throw new Error('senha não consta');
    }
    const newUser = await Login.create(User);
    return newUser as User;
  }
}
