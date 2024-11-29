import mongoose from "mongoose";

const desarrolladorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    edad: {
        type: Number,
        required: true,
        trim: true,
    },
    puesto: {
        type: String,
        required: true,
        trim: true,
    },
    seniority: {
        type: String,
        required: true,
        trim: true,
    },
    salario: {
        type: Number,
        required: true,
        trim: true,
    }
})

export default mongoose.model("Desarrollador", desarrolladorSchema)