// src/routes/usuarioRoutes.ts
import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";

const router = Router();

router.route("/")
    .get(UsuarioController.getAll)
    .post(UsuarioController.create);

router.route("/:id")
    .get(UsuarioController.getById)
    .put(UsuarioController.update)
    .delete(UsuarioController.delete);

export default router;
