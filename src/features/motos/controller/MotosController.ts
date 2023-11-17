import type {
  MotoByIdRequest,
  MotoCreateRequest,
  MotosRepository,
} from "../types";
import { type Request, type Response } from "express";

class MotosController {
  constructor(private readonly motosRepository: MotosRepository) {}

  public getMotos = async (req: Request, res: Response): Promise<void> => {
    const motos = await this.motosRepository.getMotos();
    res.status(200).json({ motos });
  };

  public getMotoById = async (
    req: MotoByIdRequest,
    res: Response,
  ): Promise<void> => {
    const { motoId } = req.params;

    try {
      const moto = await this.motosRepository.getMotoById(motoId);
      res.status(200).json({ moto });
    } catch {
      res.status(404).json({ error: "Moto not found" });
    }
  };

  public createMoto = async (
    req: MotoCreateRequest,
    res: Response,
  ): Promise<void> => {
    const motoData = req.body;
    try {
      const newMoto = await this.motosRepository.createMoto(motoData);
      res.status(201).json({ moto: newMoto });
    } catch {
      res.status(500).json({ error: "Error creating the new moto" });
    }
  };

  public deleteMoto = async (
    req: MotoByIdRequest,
    res: Response,
  ): Promise<void> => {
    const { motoId } = req.params;

    try {
      await this.motosRepository.deleteMoto(motoId);
      res.status(200).json({});
    } catch {
      res.status(404).json({ error: "Couldn't delete the moto" });
    }
  };
}
export default MotosController;
