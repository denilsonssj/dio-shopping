export const ENV = (process.env.REACT_APP_ENV as string) || 'production';
export const IS_DEVELOPMENT = ENV === 'development';
