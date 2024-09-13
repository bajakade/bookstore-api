import * as bcrypt from 'bcrypt';

export const encryptText = (text: string) => {
    const saltOrRounds = 10;

    return bcrypt.hash(text, saltOrRounds);
}