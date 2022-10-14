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
  const tokejwt = process.env.JWT_SECRET as string;
  const { authorization } = req.headers;
  if (authorization) {
    
    res.status(401).json({ massage: 'Token must be a valid token' })
  }
  next();
}

export { createToken, checkToken, validToken };
