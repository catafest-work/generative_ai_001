const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("--Gemini API from aistudio.google--");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Find data about Catalin George Festila, born 1976, nicknames : catafest and mythcat. You can find it on linkedit,github,intsgram or web search.";

async function generateContent() {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

generateContent();