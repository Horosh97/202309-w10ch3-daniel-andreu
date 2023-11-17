import mockMotos from "../../mocks/motosMocks";
import type { MotoStructure, MotosRepository } from "../../types";
import MotosController from "../MotosController";
import { type Request, type Response } from "express";

describe("Given a MotosController's getMotos method", () => {
  describe("When it receives a response", () => {
    const motos: MotoStructure[] = mockMotos;

    const motosRepository: MotosRepository = {
      getMotos: jest.fn().mockResolvedValue(motos),
      getMotoById: jest.fn(),
      createMoto: jest.fn(),
    };

    const motosController = new MotosController(motosRepository);

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await motosController.getMotos(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with Ducati Panigale and Sportster 1200", async () => {
      const expectedMotos = motos;

      await motosController.getMotos(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ motos: expectedMotos });
    });
  });
});
