"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const desarrollador_1 = __importDefault(require("../models/desarrollador"));
const router = (0, express_1.Router)();
//EndPoint para crear un nuevo desarrollador
router.post("/crear", (req, res) => {
    const desarrollador = new desarrollador_1.default(req.body);
    //Guarda desarrollador
    desarrollador.save()
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(400).json({ message: err.message }));
});
//Endpoint para traer la lista entera de desarrolladores
router.get("/traer", (_, res) => {
    //Busca los desarrolladores
    desarrollador_1.default.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json({ message: err.message }));
});
//Endpoint para traer a un desarrollador en especifico
router.get("/traer/:id", (req, res) => {
    const id = req.params.id;
    //Busca a un desarrollador
    desarrollador_1.default.findById(id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json({ message: err.message }));
});
//Endpoint para actualizar los datos de un desarrollador
router.put("/actualizar/:id", (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, edad, puesto, seniority, salario } = req.body;
    //Modifica al desarrollador
    desarrollador_1.default
        .updateOne({ _id: id }, { $set: { nombre, apellido, edad, puesto, seniority, salario } })
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json({ message: err.message }));
});
//Endpoint para eliminar un desarrollador
router.delete("/eliminar/:id", (req, res) => {
    const id = req.params.id;
    //Elimina al desarrollador
    desarrollador_1.default.deleteOne({ _id: id })
        .then((data) => res.status(204).json(data))
        .catch((err) => res.status(400).json({ message: err.message }));
});
exports.default = router;
