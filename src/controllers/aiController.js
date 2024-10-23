import { callGeminiAPI, chatGeminiAPI } from '../services/geminiService.js';

export const generateAIResponse = async (req, res) => {
  try {
    console.log('Received request body:', JSON.stringify(req.body, null, 2));

    const { history } = req.body;

    if (!history) {
      console.log('history is undefined');
      return res.status(400).json({ error: 'chat history is required' });
    } else if (!Array.isArray(history)) {
      console.log('history is not an array');
      return res.status(400).json({ error: 'chat history is required' });
    } else if (history.length == 0) {
      console.log('history is empty')
      return res.status(400).json({ error: 'chat history is required' });
    }

    if (history.length == 1) {
      const user_input = history[0]["parts"][0]["text"];
      console.log("User input: ", user_input);
      const response = await callGeminiAPI(user_input);
      console.log('Response from Gemini generateContent:', response);
      res.json({ response });
    } else {
      const response = await chatGeminiAPI(history);
      console.log('Response from Gemini startChat:', response);
      res.json({ response });
    }
  } catch (error) {
    console.error('Error in generateAIResponse:', error);
    res.status(500).json({ error: error.message });
  }
};