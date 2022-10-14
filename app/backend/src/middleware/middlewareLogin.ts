import { Request, Response, NextFunction } from 'express';

const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const Password = 6;

const validEmail = {

  checkPassworEmail: (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
  },

  checkEmail: (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    if (!regexEmail.test(email)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    next();
  },

  checkPassword: (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    if (password.length < Password) {
      return res.status(401)
        .json({ message: 'Password length must be more than 6 characters long' });
    }

    next();
  },
};

export default validEmail;
