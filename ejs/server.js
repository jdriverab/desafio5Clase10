const express = require("express");
const apiRouter = require("./router");

const app = express();
const PORT = 8080;

app.set("views", "./views")
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))

app.use("/productos", apiRouter);


const server = app.listen(PORT, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})



server.on('error', err =>{
    console.log(`Error en servidor: ${err}`);
})

