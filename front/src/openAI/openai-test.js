import OpenAI from "openai";
// import dotenv from 'dotenv';
// dotenv.config({
//     debug: true,
//   });


// console.log(process.env);
const openai = new OpenAI({apiKey:'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'});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();