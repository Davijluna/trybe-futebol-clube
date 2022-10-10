import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

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

export { createToken, checkToken };
