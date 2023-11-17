import Moto from "../model/Moto.js";
import type { MotoData, MotoStructure, MotosRepository } from "../types";

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

  public async createMoto(moto: MotoData): Promise<MotoStructure> {
    try {
      const newMoto = await Moto.create(moto);
      return newMoto;
    } catch (error) {
      throw new Error(
        "Error creating the new clown: " + (error as Error).message,
      );
    }
  }
}

export default MotosMongooseRepository;
