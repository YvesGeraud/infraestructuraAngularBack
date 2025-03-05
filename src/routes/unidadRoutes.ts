import { Router } from "express";
import { UnidadController } from "../controller/UnidadController";

const router = Router();

router.route("/")
    .get(UnidadController.getAll)
    .post(UnidadController.create);

router.route("/:id")
    .get(UnidadController.getById)
    .put(UnidadController.update);

router.route("/cct/:cct")
    .get(UnidadController.getByCct);

router.get("/sugerencias", UnidadController.getSugerencias);

export default router;
