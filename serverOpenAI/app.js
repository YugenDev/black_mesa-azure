const express = require("express");
const {crearNuevoHilo, añadirAlHilo,enviarAlAsistente,estadoRespuesta,mensajes} = require("./methods")

const app = express();
app.use(express.json());

app.get("/hilo",async (res)=>{
    const hilo = await crearNuevoHilo();
    res.send(hilo)
})
app.get("/hilo/:id",async (req,res)=>{
    const thread = req.params.id
    const hilo = await mensajes(thread);
    res.send(hilo)
})
app.post("/hilo",async (req,res)=>{
    // console.log(req.body);
    const {thread, mensaje} =req.body;
    const message = await añadirAlHilo(thread, mensaje);
    res.send(message)
})


app.get("/asistente", async (req, res) => {
    const { thread, run } = req.query;
    const runStatus = await estadoRespuesta(thread, run);
    res.send(runStatus);
  });
app.post("/asistente", async (req,res)=>{
    const {thread} = req.body
    const run = await enviarAlAsistente(thread)
    res.send(run)
})



// app.get("/",(req,res)=>{
//     res.send("wenas")
// })


app.listen(3001,()=>{
    console.log("running in port 3001");
})