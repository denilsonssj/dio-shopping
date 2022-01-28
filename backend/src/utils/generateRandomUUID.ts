import { v4 } from 'uuid';

export const generateRandomUUID = (): string => {
    return v4();
}