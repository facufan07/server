import { Router } from "express";
import desarrolladorSchema from "../models/desarrollador";

const router = Router();

//EndPoint para crear un nuevo desarrollador
router.post("/crear",(req, res) =>{
    const desarrollador = new desarrolladorSchema(req.body);

    //Guarda desarrollador
    desarrollador.save()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(400).json({message: err.message}))
})

//Endpoint para traer la lista entera de desarrolladores
router.get("/traer", (_, res) => {
    //Busca los desarrolladores
    desarrolladorSchema.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({message: err.message}))
})

//Endpoint para traer a un desarrollador en especifico
router.get("/traer/:id", (req, res) => {
    const id = req.params.id;

    //Busca a un desarrollador
    desarrolladorSchema.findById(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({message: err.message}))
})

//Endpoint para actualizar los datos de un desarrollador
router.put("/actualizar/:id", (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, edad, puesto, seniority, salario } = req.body;
    
    //Modifica al desarrollador
    desarrolladorSchema
    .updateOne({_id: id}, {$set:{nombre, apellido, edad, puesto, seniority, salario}})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({message: err.message}))
})

//Endpoint para eliminar un desarrollador
router.delete("/eliminar/:id", (req, res) => {
    const id = req.params.id;

    //Elimina al desarrollador
    desarrolladorSchema.deleteOne({_id:id})
    .then((data) => res.status(204).json(data))
    .catch((err) => res.status(400).json({message: err.message}))
})
export default router;