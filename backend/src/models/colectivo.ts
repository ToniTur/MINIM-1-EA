import  {model, Schema, Document} from "mongoose";

export interface IColectivo extends Document {
    name: string;
    description: string;
    vaccine: string;
}

const colectivoSchema = new Schema({
    name: {type: String},
    description: {type: String},
    vaccine: {type: String},
})

export default model<IColectivo>("Colectivo", colectivoSchema, "colectivos");
