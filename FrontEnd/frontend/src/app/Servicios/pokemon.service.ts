import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class PokemonService {

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

  getPokemon() {
    let header = PokemonService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Pokemon",{headers: header});
  }
  getPokemonBusqueda(parametroBusqueda) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Pokemon/" + parametroBusqueda ,{headers: header});
  }
  getPokemonPorEntrenador(idEntrenador) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Pokemon/porEntrenador/" + idEntrenador ,{headers: header});
  }
  getPokemonPorId(Id) {
    let header = PokemonService.getCommonHeaders();
    return this.http.get("http://localhost:1337/Pokemon/por/id/" + Id ,{headers: header});
  }
}
