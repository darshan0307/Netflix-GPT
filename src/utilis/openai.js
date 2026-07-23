// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export default openai;


import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export default groq;