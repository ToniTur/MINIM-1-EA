"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colectivo_1 = __importDefault(require("../models/colectivo"));
const getColectivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield colectivo_1.default.find({});
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(400).json(err);
    }
});
const postColectivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newColectivo = new colectivo_1.default({
        name: req.body.name,
        description: req.body.description,
        vaccine: req.body.vaccine,
    });
    console.log(req.body);
    newColectivo.save().then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json(err);
    });
});
const deleteColectivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let caseId = req.params.id;
    colectivo_1.default.updateOne({ "_id": caseId }, { $set: {
            name: req.body.name,
            birthdate: req.body.birthdate,
            date: req.body.date,
            risk: req.body.risk,
            sex: req.body.sex,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            class: req.body.class
        }
    }).then((data) => {
        if (data.nModified == 1) {
            res.status(201).send("Colectivo deleted");
        }
        else {
            res.status(400).send("Colectivo not deleted");
        }
    });
});
exports.default = { getColectivos, postColectivos, deleteColectivo };
