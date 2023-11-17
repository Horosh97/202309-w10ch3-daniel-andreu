import Moto from "../model/Moto.js";
import type { MotoStructure, MotosRepository } from "../types";

class MotosMongooseRepository implements MotosRepository {
  public async getMotos(): Promise<MotoStructure[]> {
    const motos = await Moto.find();

    return motos;
  }
}

export default MotosMongooseRepository;
