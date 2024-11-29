"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
//Importacion de rutas
const desarrollador_1 = __importDefault(require("./routes/desarrollador"));
//Creo servidor
const app = (0, express_1.default)();
const PORT = 8000;
//Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Routes
app.use("/desarrolladores", desarrollador_1.default);
//Conexion a MongoDB
mongoose_1.default.connect("mongodb+srv://facu:root@cluster0.oobxnwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.log(err.message));
//Pongo el servidor a escuchar
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
