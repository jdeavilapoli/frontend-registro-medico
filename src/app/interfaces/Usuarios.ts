import {Rol} from "./Rol";

export interface Usuarios {
  id: number;
  nombres: string;
  apellidos: string;
  telefono: number;
  fechaNacimiento: Date;
  correo: string;
  usuario: string;
  direccion: string;
  contrasena: string;
  barrio: string;
  genero: string;
  condiciones: boolean;
  rol: Rol
}
