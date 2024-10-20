import { GoogleGenerativeAI } from "@google/generative-ai";

export const callGeminiAPI = async (prompt) => {
  return "Hi! How can I help you today? \n"

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  return result.response.text()
};