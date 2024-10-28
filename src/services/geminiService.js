import { GoogleGenerativeAI } from "@google/generative-ai";

export const callGeminiAPI = async (prompt) => {
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return `response: ${prompt}`
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  return result.response.text();
};

export const chatGeminiAPI = async (history) => {
  const user_input = history.pop();
  const prompt = user_input["parts"][0]["text"];
  console.log("User input: ", prompt);
  console.log("Previous chat: ", history);
  return `response: ${prompt}`

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const chat = model.startChat({
    history
  });
  
  const result = await chat.sendMessage(prompt);
  return result.response.text();
};