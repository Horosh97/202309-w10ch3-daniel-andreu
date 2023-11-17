import { Router } from "express";
import MotosMongooseRepository from "../repository/MotosMoongoseRepository.js";
import MotosController from "../controller/MotosController.js";

const motosRouter = Router();

const motosRepository = new MotosMongooseRepository();
const motosController = new MotosController(motosRepository);

motosRouter.get("/", motosController.getMotos);
motosRouter.get("/:motoId", motosController.getMotoById);
export default motosRouter;
