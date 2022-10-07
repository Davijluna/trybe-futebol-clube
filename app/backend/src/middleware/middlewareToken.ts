import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const senha = process.env.JWT_SECRET || 'password';
const jwtConfig: jwt.SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const createToken = (email: any) => {
  const token = jwt.sign({ email }, senha, jwtConfig);
  return token;
};

// const checkToken = (token: any) => {
//     const tokenCheck = jwt.verify(token, senha ) as jwt.JwtPayload;
//     return tokenCheck
// };

export default createToken;
