import Moto from "../model/Moto.js";
import type { MotoStructure, MotosRepository } from "../types";

class MotosMongooseRepository implements MotosRepository {
  public async getMotos(): Promise<MotoStructure[]> {
    const motos = await Moto.find();

    return motos;
  }

  public async getMotoById(motoId: string): Promise<MotoStructure> {
    const moto = await Moto.findById(motoId);

    if (!moto) {
      throw new Error("Couldn't get a moto with that ID");
    }

    return moto;
  }
}

export default MotosMongooseRepository;
