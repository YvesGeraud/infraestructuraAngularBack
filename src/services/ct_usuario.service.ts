import { ct_usuario, ct_usuarioCreationAttributes } from "../models/ct_usuario";
import { executeQuery, executeInsert, executeUpdate, executeDelete } from "../config/database";

interface QueryResult {
  [key: string]: any;
}

class CtUsuarioService {
  // Crear un nuevo usuario
  async crearUsuario(data: ct_usuarioCreationAttributes) {
    try {
      const query = `
        INSERT INTO ct_usuario (usuario, contrasena, estatus, fecha_registro, fecha_modificacion)
        VALUES (?, ?, ?, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6))
      `;
      const params = [data.usuario, data.contrasena, data.estatus];
      const result = await executeInsert(query, params);
      return result;
    } catch (error) {
      console.error('Error en crearUsuario:', error);
      throw error;
    }
  }

  // Obtener un usuario por su ID
  async obtenerUsuarioPorId(id: number) {
    try {
      const query = 'SELECT * FROM ct_usuario WHERE id_usuario = ?';
      const result = await executeQuery(query, [id]) as QueryResult[];
      if (!result || result.length === 0) {
        throw new Error("Usuario no encontrado");
      }
      return result[0];
    } catch (error) {
      console.error('Error en obtenerUsuarioPorId:', error);
      throw error;
    }
  }

  // Actualizar un usuario existente
  async actualizarUsuario(id: number, data: Partial<ct_usuarioCreationAttributes>) {
    try {
      const query = `
        UPDATE ct_usuario 
        SET usuario = ?, 
            contrasena = ?, 
            estatus = ?,
            fecha_modificacion = CURRENT_TIMESTAMP(6)
        WHERE id_usuario = ?
      `;
      const params = [data.usuario, data.contrasena, data.estatus, id];
      const result = await executeUpdate(query, params) as [number, number];
      
      if (!result || result[1] === 0) {
        throw new Error("Usuario no encontrado");
      }
      
      return await this.obtenerUsuarioPorId(id);
    } catch (error) {
      console.error('Error en actualizarUsuario:', error);
      throw error;
    }
  }

  // Eliminar un usuario
  async eliminarUsuario(id: number) {
    try {
      const query = 'DELETE FROM ct_usuario WHERE id_usuario = ?';
      const result = await executeDelete(query, [id]) as [number, number];
      
      if (!result || result[1] === 0) {
        throw new Error("Usuario no encontrado");
      }
      
      return true;
    } catch (error) {
      console.error('Error en eliminarUsuario:', error);
      throw error;
    }
  }

  // Obtener todos los usuarios
  async obtenerTodosLosUsuarios() {
    try {
      const query = 'SELECT * FROM ct_usuario';
      const result = await executeQuery(query) as QueryResult[];
      return result;
    } catch (error) {
      console.error('Error en obtenerTodosLosUsuarios:', error);
      throw error;
    }
  }
}

export default new CtUsuarioService();
