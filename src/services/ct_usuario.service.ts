import { ct_usuario, ct_usuarioCreationAttributes } from "../models/ct_usuario";

class CtUsuarioService {
  // Crear un nuevo usuario
  async crearUsuario(data: ct_usuarioCreationAttributes) {
    // Aqui se podria agregar logica adicional, como validaciones o hasheo de contraseña pero como no es necesario se omite
    const nuevoUsuario = await ct_usuario.create(data);
    return nuevoUsuario;
  }

  // Obtener un usuario por su ID
  async obtenerUsuarioPorId(id: number) {
    const usuarioEncontrado = await ct_usuario.findByPk(id);
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
    const usuarioEncontrado = await ct_usuario.findByPk(id);
    if (!usuarioEncontrado) {
      throw new Error("Usuario no encontrado");
    }
    await usuarioEncontrado.update(data);
    return usuarioEncontrado;
  }

  // Eliminar un usuario
  async eliminarUsuario(id: number) {
    const usuarioEncontrado = await ct_usuario.findByPk(id);
    if (!usuarioEncontrado) {
      throw new Error("Usuario no encontrado");
    }
    await usuarioEncontrado.destroy();
    return true;
  }
}

export default new CtUsuarioService();
