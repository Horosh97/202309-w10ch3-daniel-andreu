import { Schema, model } from "mongoose";
import type { MotoStructure } from "../types";

const motoSchema = new Schema<MotoStructure>({
  name: {
    type: String,
    required: true,
  },
  maxSpeed: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

const Moto = model("Moto", motoSchema, "motos");

export default Moto;
