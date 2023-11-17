import { type Request } from "express";

export interface MotoData {
  name: string;
  maxSpeed: string;
  brand: string;
}

export interface MotoStructure extends MotoData {
  id: string;
}

export interface MotosRepository {
  getMotos: () => Promise<MotoStructure[]>;
  getMotoById: (motoId: string) => Promise<MotoStructure>;
  createMoto: (moto: MotoData) => Promise<MotoStructure>;
}

export type MotoByIdRequest = Request<{ motoId: string }>;
