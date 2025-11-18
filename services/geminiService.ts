
import { GoogleGenAI } from "@google/genai";
import { Level } from '../types';

const getApiKey = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    // This is a fallback for development environments where the key might not be set.
    // In a real production environment, this should throw an error or be handled securely.
    console.warn("API_KEY environment variable not set.");
    return "mock_api_key_for_development";
  }
  return apiKey;
};


export const getHint = async (level: Level): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    
    const prompt = `Anda adalah LUNO, asisten AI dalam game edukasi futuristik. Pemain membutuhkan petunjuk untuk sebuah teka-teki.
    Level saat ini adalah tentang "${level.concept}".
    Teka-tekinya adalah: "${level.puzzle.description}".
    Berikan petunjuk singkat, cerdas, dan sedikit samar untuk membimbing pemain tanpa memberikan jawaban langsung.
    Jaga agar nadanya tetap memberi semangat dan futuristik. Petunjuk harus terdiri dari satu atau dua kalimat.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error fetching hint from Gemini API:", error);
    return "Koneksi ke jaringan petunjuk LUNO gagal. Pikirkan tentang konsep inti level ini: " + level.concept;
  }
};
