import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
//Importacion de rutas
import DesarrolladorRoutes from "./routes/desarrollador";

//Creo servidor
const app = express();
const PORT = 8000;

//Middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use("/desarrolladores",DesarrolladorRoutes)

//Conexion a MongoDB
mongoose.connect("mongodb+srv://facu:root@cluster0.oobxnwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Conectado a MongoDB"))
.catch((err) => console.log(err.message))

//Pongo el servidor a escuchar
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})