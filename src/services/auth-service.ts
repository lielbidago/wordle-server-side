import jwt, { JwtPayload } from 'jsonwebtoken';

export const WORDLE_JWT_KEY = 'my secret wordle key';

export function createJWT(data: object): string {
    return jwt.sign(data, WORDLE_JWT_KEY);
}

export function verifyJWT<T = JwtPayload>(token: string): T {
    return jwt.verify(token, WORDLE_JWT_KEY) as T;
}


