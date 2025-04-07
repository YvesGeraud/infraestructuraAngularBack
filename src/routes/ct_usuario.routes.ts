import { Router } from "express";
import CtUsuarioController from "../controllers/ct_usuario.controller";

const router = Router();

//* Crear un nuevo usuario
router.post("/", CtUsuarioController.crearUsuario);

//* Obtener un usuario por su ID
router.get("/:id", CtUsuarioController.obtenerUsuarioPorId);

//* Actualizar un usuario existente
router.put("/:id", CtUsuarioController.actualizarUsuario);

//* Eliminar un usuario
router.delete("/:id", CtUsuarioController.eliminarUsuario);

export default router;
