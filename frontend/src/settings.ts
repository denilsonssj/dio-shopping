export const ENV = (process.env.REACT_APP_ENV as string) || 'production';
export const IS_DEVELOPMENT = ENV === 'development';
export const API_URL = (process.env.REACT_APP_API_URL as string) || '';
