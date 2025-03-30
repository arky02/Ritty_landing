import jwt, { TAlgorithm } from 'jwt-simple';

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY; // 서버와 동일한 secretKey 사용
const algorithm = process.env.NEXT_PUBLIC_JWT_ALG
const issuer = process.env.NEXT_PUBLIC_JWT_ISSUER;
const expire = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60; // Set expire date to 1 month from now

const makeToken = (payload: { id: string }) => {
    const tokenPayload = {
        ...payload,
        exp: expire,
        iss: issuer
    };
    return jwt.encode(tokenPayload, secretKey!, algorithm as TAlgorithm);
};


export default makeToken
