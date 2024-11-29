"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const desarrolladorSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model("Desarrollador", desarrolladorSchema);
