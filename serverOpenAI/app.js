const express = require("express");
const cors = require("cors");
const {crearNuevoHilo, añadirAlHilo,enviarAlAsistente,estadoRespuesta,mensajes} = require("./methods")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/hilo", async (req,res)=>{
    const hilo = await crearNuevoHilo();
    res.send(hilo)
})
app.get("/hilo/:id",async (req,res)=>{
    const thread = req.params.id
    const hilo = await mensajes(thread);
    res.send(hilo)
})
app.post("/hilo",async (req,res)=>{
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


app.listen(3001,()=>{
    console.log("running in port 3001");
})