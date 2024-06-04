import { translateTextService } from '../services/translationServices.js'

export const translateText = async (req, res) => {
  const { fromLang, toLang, text } = req.body;
  
  try {
    const translatedText = await translateTextService(fromLang, toLang, text);
    res.status(200).json(translatedText);
  } catch (error) {
    console.error('Erro ao realizar a tradução:', error);
    res.status(400).json({ message: error.message });
  }
};
