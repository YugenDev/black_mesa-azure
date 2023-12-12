const OpenAI = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const openai = new OpenAI({apiKey:process.env.API_KEY});
const assistantId = process.env.ASSITANT_ID


exports.crearNuevoHilo =  async ()=>{
    const thread = await openai.beta.threads.create();
    console.log(thread, "nuevo hilo");
    return thread
}

exports.añadirAlHilo = async ( thread, mensaje)=>{
    const message = await openai.beta.threads.messages.create(
        thread.id,
        {
          role: "user",
          content: mensaje
        }
      );
    return message
}

exports.enviarAlAsistente = async (thread)=>{
    const run = await openai.beta.threads.runs.create(
        thread.thread_id,
        { 
          assistant_id: assistantId,
        //   instructions: ""
        
        }
      );
      return run
}

exports.estadoRespuesta = async (thread, run)=>{
    const runStatus = await openai.beta.threads.runs.retrieve(
        thread,
        run
      );
    return runStatus
}

exports.mensajes = async (threadId)=>{
    console.log(threadId);
    const messages = await openai.beta.threads.messages.list(
        threadId
      );
    return messages
}


// export {crearNuevoHilo, añadirAlHilo,enviarAlAsistente,estadoRespuesta,mensajes}