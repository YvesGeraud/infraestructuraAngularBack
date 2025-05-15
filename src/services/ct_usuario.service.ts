import {
  ct_usuarioCreationAttributes,
  initModels,
} from "../models/init-models";
import { sequelize } from "../config/database";

//! Inicializar los modelos
const models = initModels(sequelize);

//! Desestructurar los modelos que necesitamos
const { ct_usuario: Usuario } = models;

class CtUsuarioService {
  //* Crear un nuevo usuario
  async crearUsuario(data: ct_usuarioCreationAttributes) {
    // Aqui se podria agregar logica adicional, como validaciones o hasheo de contraseña pero como no es necesario se omite
    const nuevoUsuario = await Usuario.create(data);
    return nuevoUsuario;
  }

  // Obtener un usuario por su ID
  async obtenerUsuarioPorId(id: number) {
    const usuarioEncontrado = await Usuario.findByPk(id);
    if (!usuarioEncontrado) {
      throw new Error("Usuario no encontrado");
    }
    return usuarioEncontrado;
  }

  // Actualizar un usuario existente
  async actualizarUsuario(
    id: number,
    data: Partial<ct_usuarioCreationAttributes>
  ) {
    const usuarioEncontrado = await Usuario.findByPk(id);
    if (!usuarioEncontrado) {
      throw new Error("Usuario no encontrado");
    }
    await usuarioEncontrado.update(data);
    return usuarioEncontrado;
  }

  // Eliminar un usuario
  async eliminarUsuario(id: number) {
    const usuarioEncontrado = await Usuario.findByPk(id);
    if (!usuarioEncontrado) {
      throw new Error("Usuario no encontrado");
    }
    await usuarioEncontrado.destroy();
    return true;
  }
}

export default new CtUsuarioService();
