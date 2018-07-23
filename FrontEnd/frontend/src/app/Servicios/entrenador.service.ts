import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class EntrenadorService {

  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getEntrenadores() {
    let header = EntrenadorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/entrenador",{headers: header});
  }
  getEntrenadorBusqueda(parametroBusqueda) {
    let header = EntrenadorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/entrenador/" + parametroBusqueda ,{headers: header});
  }
  getEntrenadoresporUsuario(idUsuario) {
    let header = EntrenadorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/entrenador/porUsuario/" + idUsuario ,{headers: header});
  }

  getEntrenadoresPorNombre(nombre) {
    let header = EntrenadorService.getCommonHeaders();
    return this.http.get("http://localhost:1337/entrenador/" + nombre ,{headers: header});
  }


}
