
import { GoogleGenAI } from "@google/genai";

// We use a getter to lazily initialize the AI client. 
// This prevents top-level crashes if process.env.API_KEY is missing in certain environments.
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiInstance;
};

export const askGemini = async (question: string, context: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are an expert Salesforce IAM tutor. Context of current lesson: ${context}. Provide a concise, helpful answer that simplifies complex concepts. Use Salesforce-specific terminology where appropriate.`,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please ensure your API environment is configured.";
  }
};
