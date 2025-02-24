import { Router } from "express";
import { UnidadController } from "../controller/UnidadController";

const router = Router();

router.route("/")
    .get(UnidadController.getAll)
    .post(UnidadController.create);

router.route("/:id")
    .get(UnidadController.getById);

router.route("/:id")
    .put(UnidadController.update);

export default router;
