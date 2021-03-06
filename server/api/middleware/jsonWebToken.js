import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET;
// "secret key" generator   --->   https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx
// Reminder: make sure to set up a secret key in .env (the presented 'secret' is not production valid)

export const generateToken = (data) => {
  return jwt.sign(data, new Buffer.from(SECRET, 'base64'), { expiresIn: '12h' });
};

export const authenticateToken_http = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, new Buffer.from(SECRET, 'base64'));
    request.roomId = decoded.roomId;
    request.userId = decoded.userId;
    request.role = decoded.role;
    next();
  } catch (error) {
    console.log(error.message);
    response.status(401).json({ message: error.message });
  }
};

export const authenticateToken_socket = (token) => {
  let tokenData = {},
    tokenError = false;
  try {
    tokenData = jwt.verify(token, new Buffer.from(SECRET, 'base64'));
  } catch (error) {
    console.log(error);
    isError = { error };
  }
  return { tokenData, tokenError };
};
