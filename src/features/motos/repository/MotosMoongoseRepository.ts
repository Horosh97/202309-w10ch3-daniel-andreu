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
        "Error creating the new moto: " + (error as Error).message,
      );
    }
  }

  public async deleteMoto(motoId: string): Promise<void> {
    try {
      await Moto.findByIdAndDelete(motoId);
    } catch (error) {
      throw new Error("Error deleting the moto: " + (error as Error).message);
    }
  }
}

export default MotosMongooseRepository;
