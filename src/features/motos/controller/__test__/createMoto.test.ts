import { type Response } from "express";
import type { MotoCreateRequest, MotosRepository } from "../../types";
import MotosController from "../MotosController";

describe("Given a motosControllers's method createMoto", () => {
  const mockMoto = {
    name: "Ducati Panigale",
    maxSpeed: "315km/h",
    brand: "Ducati",
  };

  const req: Pick<MotoCreateRequest, "body"> = {
    body: mockMoto,
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  describe("When it receives a response", () => {
    const motosRepository: MotosRepository = {
      getMotoById: jest.fn(),
      getMotos: jest.fn(),
      createMoto: jest.fn().mockResolvedValue(mockMoto),
    };

    const motosController = new MotosController(motosRepository);
    test("Then it should call its methods status 201", async () => {
      const expectedStatusCode = 201;

      await motosController.createMoto(
        req as MotoCreateRequest,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with the new moto", async () => {
      const expectedMoto = mockMoto;

      await motosController.createMoto(
        req as MotoCreateRequest,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({ moto: expectedMoto });
    });
  });

  describe("When it receives a response and there's an error when creating a new moto", () => {
    const motosRepository: MotosRepository = {
      getMotoById: jest.fn(),
      getMotos: jest.fn(),
      createMoto: jest.fn().mockRejectedValue("error"),
    };

    const motosController = new MotosController(motosRepository);
    test("Then it should call its method status with 500", async () => {
      const expectedStatusCode = 500;

      await motosController.createMoto(
        req as MotoCreateRequest,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with a 'Error creating the new moto' error", async () => {
      const expectedErrorMessage = "Error creating the new moto";

      await motosController.createMoto(
        req as MotoCreateRequest,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({ error: expectedErrorMessage });
    });
  });
});
