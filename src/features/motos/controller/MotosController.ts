import type { MotosRepository } from "../types";
import { type Request, type Response } from "express";

class MotosController {
  constructor(private readonly motosRepository: MotosRepository) {}

  public getMotos = async (req: Request, res: Response): Promise<void> => {
    const motos = await this.motosRepository.getMotos();
    res.status(200).json({ motos });
  };
}
export default MotosController;
