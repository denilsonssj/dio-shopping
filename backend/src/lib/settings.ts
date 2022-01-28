import 'dotenv/config';

export const SERVER_PORT = parseInt(process.env.SERVER_PORT as string) || 3333;
export const DATABASE_TYPE = (process.env.DATABASE_TYPE as string) || '';
export const DATABASE_HOST = (process.env.DATABASE_HOST as string) || '';
export const DATABASE_NAME = (process.env.DATABASE_NAME as string) || '';
export const DATABASE_USERNAME = (process.env.DATABASE_USERNAME as string) || '';
export const DATABASE_PASSWORD = (process.env.DATABASE_PASSWORD as string) || '';
export const DATABASE_PORT = parseInt((process.env.DATABASE_PORT as string)) || 0;