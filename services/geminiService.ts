
import { GoogleGenAI } from "@google/genai";

// Ensure the API_KEY is set in the environment variables
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume it's always available.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generatePostIdea = async (topic: string): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable.";
  }

  try {
    const prompt = `You are an assistant for students on an educational social network called Lumus.
Generate a short, engaging social media post about the following topic. The post should be suitable for an academic audience (students and teachers).
Keep it concise and inspiring. Do not use hashtags.

Topic: "${topic}"`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 1,
        topK: 32,
        maxOutputTokens: 150,
        thinkingConfig: { thinkingBudget: 10 }
      },
    });

    const text = response.text;
    return text.trim();
  } catch (error) {
    console.error("Error generating content with Gemini API:", error);
    return "Sorry, I couldn't generate an idea right now. Please try again later.";
  }
};
