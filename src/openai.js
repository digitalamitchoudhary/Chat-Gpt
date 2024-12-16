const {Configuration, OpenAIApi} = require ('openai');
const configuration = new Configuration ({apiKey: "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"})
const openai = new OpenAIApi(configuration);

export async function  sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt : message, 
        temperature : 0.7,
        max_tokens: 256,
        top_p : 1,
        frequency_penalty : 0,
        presense_penal : 0,
    });
    return res.data.choices[0].text;
}
