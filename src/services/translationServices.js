import { v4 as uuidv4 } from 'uuid';
import { getConfig } from '../config/config.js';

export const translateTextService = async (fromLang, toLang, text) => {
  const { apiKey, apiLocation, apiEndpoint } = getConfig();
  const url = `${apiEndpoint}/translate?api-version=3.0&to=${toLang}`;

  const headers = {
    'Content-type': 'application/json',
    'Ocp-Apim-Subscription-Key': apiKey,
    'Ocp-Apim-Subscription-Region': apiLocation,
    'X-ClientTraceId': uuidv4().toString(),
  };

  const body = JSON.stringify([{ text, from: fromLang }]);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao realizar a tradução:', error);
    throw new Error('Erro ao realizar a tradução');
  }
};
