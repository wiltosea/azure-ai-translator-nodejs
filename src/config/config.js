import dotenv from 'dotenv';

dotenv.config();

export const getConfig = () => ({
  apiKey: process.env.API_TRANSLATE_KEY,
  apiLocation: process.env.API_TRANSLATE_LOCATION,
  apiEndpoint: process.env.API_TRANSLATE_ENDPOINT,
});
