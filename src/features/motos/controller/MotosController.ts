import type { MotoByIdRequest, MotosRepository } from "../types";
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
}
export default MotosController;
