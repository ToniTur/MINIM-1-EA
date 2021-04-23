import Colectivo from "../models/colectivo";
import {Request, Response} from "express";


const getColectivos = async (req: Request, res: Response) => {
    try {
        const results = await Colectivo.find({});
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(400).json(err);
    }
}

const postColectivos = async (req: Request, res: Response) => {
    const newColectivo = new Colectivo( {
        name: req.body.name,
        description: req.body.description,
        vaccine: req.body.vaccine,
    })
    console.log(req.body);
    newColectivo.save().then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json(err);
    })
}

const deleteColectivo= async (req: Request, res: Response) => {

    //NO TIME!
}

export default {getColectivos, postColectivos, deleteColectivo};
