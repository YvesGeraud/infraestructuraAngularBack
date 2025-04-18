import { Request, Response } from "express";
import CtUsuarioService from "../services/ct_usuario.service";

class CtUsuarioController {
  //* Crear un nuevo usuario
  public async crearUsuario(req: Request, res: Response): Promise<void> {
    try {
      console.log("Recibiendo solicitud de creación de usuario:", req.body);
      const { usuario, contrasena, estatus, id_unidad } = req.body;
      //! IMPORTANTE: en produccion se debe hashear la contraseña
      const nuevoUsuario = await CtUsuarioService.crearUsuario({
        usuario,
        contrasena,
        estatus,
      });
      console.log("Usuario creado exitosamente:", nuevoUsuario);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ error: "Error al crear usuario" });
    }
  }

  //* Obtener un usuario por su ID
  public async obtenerUsuarioPorId(req: Request, res: Response): Promise<void> {
    try {
      console.log("Buscando usuario con ID:", req.params.id);
      const id = Number(req.params.id);
      const usuarioEncontrado = await CtUsuarioService.obtenerUsuarioPorId(id);
      console.log("Usuario encontrado:", usuarioEncontrado);
      if (!usuarioEncontrado) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
      } else {
        res.status(200).json(usuarioEncontrado);
      }
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      res.status(500).json({ error: "Error al obtener usuario" });
    }
  }

  //* Actualizar un usuario existente
  public async actualizarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { usuario, contrasena, estatus, id_unidad } = req.body;
      const usuarioActualizado = await CtUsuarioService.actualizarUsuario(id, {
        usuario,
        contrasena,
        estatus,
      });
      if (!usuarioActualizado) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
      } else {
        res.status(200).json(usuarioActualizado);
      }
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).json({ error: "Error al actualizar usuario" });
    }
  }

  //* Eliminar un usuario
  public async eliminarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const usuarioEliminado = await CtUsuarioService.eliminarUsuario(id);
      if (!usuarioEliminado) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
      } else {
        res.status(200).json({ message: "Usuario eliminado correctamente" });
      }
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ error: "Error al eliminar usuario" });
    }
  }
}

export default new CtUsuarioController();
