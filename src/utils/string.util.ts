import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcrypt';

export function generateRandomString(length: number) {
    let result = '';
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export function stringToBase64(s: string) {
    return Buffer.from(s).toString('base64');
}

export function base64ToString(b: string) {
    return Buffer.from(b, 'base64').toString();
}

export function generateId() {
    return uuidv4();
}

export async function generateHash(s: string) {
    return await bcrypt.hash(s, 10)
}
