import { callGeminiAPI } from '../services/geminiService.js';

export const generateAIResponse = async (req, res) => {
  try {
    const { user_input } = req.body;
    const response = await callGeminiAPI(user_input);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};