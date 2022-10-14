import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = process.env.JWT_SECRET || 'jwt_secret';
const jwtConfig: jwt.SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const createToken = (email: any) => {
  const token = jwt.sign({ email }, secret, jwtConfig);
  return token;
};

const checkToken = (token: any) => {
  try {
    const tokenCheck = jwt.verify(token, secret ) as jwt.JwtPayload;
    return tokenCheck

  } catch (erro) {
    return erro;
  }
};

const validToken = (req: Request, res: Response, next:NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  try {
    jwt.verify(token, secret);
    next();
  } catch (erro) {
    return res.status(401).json({ message: 'Token must be a valid token' })
  }
}

export { createToken, checkToken, validToken };
