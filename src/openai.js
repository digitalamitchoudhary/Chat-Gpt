// // const {Configuration, OpenAIApi} = require('openai');
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({apiKey: "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"});
// const openai = new OpenAIApi(configuration);

// export async function  sendMsgToOpenAI(message) {
//     const res = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt : message, 
//         temperature : 0.7,
//         max_tokens: 256,
//         top_p : 1,
//         frequency_penalty : 0,
//         presence_penal : 0,
//     });
//     return res.data.choices[0].text;
// }
import { OpenAI } from 'openai';

// Initialize OpenAI client with the API key
const openai = new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true  // Use React-compatible env variable
});

export async function sendMsgToOpenAI(message) {
    try {
        const res = await openai.chat.completions.create({
            model: 'gpt-4', // Use 'gpt-4' or 'gpt-3.5-turbo'
            messages: [{ role: 'user', content: message }],
            temperature: 0.7,
            max_tokens: 256,
        });

        if (!res.choices || res.choices.length === 0) {
            throw new Error("No response received from OpenAI.");
        }

        return res.choices[0].message.content.trim(); // Return the text response
    } catch (error) {
        console.error("Error communicating with OpenAI API:", error.message);
        throw new Error("Failed to communicate with OpenAI. Please try again later.");
    }
}

