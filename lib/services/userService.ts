import userRepository from '../repositories/userRepository';
import errorFactory from '../utils/errorFactory';
import { UserCreate } from './../types/userTypes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'strong secret';
const DEFAULT_EXPIRATION_TIME = 3600; // 1h

async function createUser(userData: UserCreate){
    
    const userWithSameEmail = await userRepository.findByEmail(userData.email);
    if(userWithSameEmail) throw errorFactory('conflict', 'This email is already being used.');

    const hashedPassword = await bcrypt.hash(userData.password, 12);
    userData.password = hashedPassword;

    await userRepository.create(userData);

}

async function login(userData: UserCreate){

    const defaultErrorMessage = 'invalid credentials. Make sure you typed it correctly';

    const user = await userRepository.findByEmail(userData.email);
    if(!user) throw errorFactory('unauthorized', defaultErrorMessage);

    const correctPassword = await bcrypt.compare(userData.password, user.password);
    if(!correctPassword) throw errorFactory('unauthorized', defaultErrorMessage);

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: DEFAULT_EXPIRATION_TIME });
    return token;

}

export default {
    createUser,
    login
}