import mockMotos from "../../mocks/motosMocks";
import type { MotoByIdRequest, MotosRepository } from "../../types";
import MotosController from "../MotosController";
import { type Request, type Response } from "express";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a motosController's getMotoById method", () => {
  const motos = mockMotos;

  const req: Pick<MotoByIdRequest, "params"> = {
    params: {
      motoId: motos[0].id,
    },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  describe("When it receives a response", () => {
    const motosRepository: MotosRepository = {
      getMotoById: jest.fn().mockResolvedValue(motos[0]),
      getMotos: jest.fn().mockReturnValue(motos),
    };

    const motosController = new MotosController(motosRepository);

    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await motosController.getMotoById(
        req as Request<{ motoId: string }>,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with with Ducati Panigale", async () => {
      const expectedMoto = motos[0];

      await motosController.getMotoById(
        req as Request<{ motoId: string }>,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({ moto: expectedMoto });
    });
  });
  describe("When it receives a response and there is an error when getting the moto", () => {
    const motosRepository: MotosRepository = {
      getMotos: jest.fn(),
      getMotoById: jest.fn().mockRejectedValue("error"),
    };
    const motosController = new MotosController(motosRepository);

    test("Then it should call its method status with a 404", async () => {
      const expectedStatusCode = 404;

      await motosController.getMotoById(
        req as MotoByIdRequest,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with an error sayin 'Moto not found'", async () => {
      const expectedErrorMessage = "Moto not found";

      await motosController.getMotoById(
        req as Request<{ motoId: string }>,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({ error: expectedErrorMessage });
    });
  });
});
