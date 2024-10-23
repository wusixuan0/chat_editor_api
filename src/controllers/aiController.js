import { callGeminiAPI } from '../services/geminiService.js';

export const generateAIResponse = async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    console.log('user_input:', req.body.user_input);

    const { user_input } = req.body;
    
    if (!user_input) {
      console.log('user_input is empty or undefined');
      return res.status(400).json({ error: 'user_input is required' });
    }

    const response = await callGeminiAPI(user_input);
    console.log('Response from Gemini API:', response);

    res.json({ response });
  } catch (error) {
    console.error('Error in generateAIResponse:', error);
    res.status(500).json({ error: error.message });
  }
};