import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";
import {Pokemon} from "../../Interfaces/pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../Servicios/pokemon.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {Entrenador} from "../../Interfaces/entrenador";
import {Router} from "@angular/router";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccionTransferencia.component.html',
  styleUrls: ['./seleccionTransferencia.component.css'],
  providers: [PokemonService, UsuarioService, EntrenadorService]
})
export class SeleccionTransferenciaComponent implements OnInit {

  listaPokemon = [];
  entrenadores: Entrenador;
  itemTransferencia: Pokemon;
  usuarioActual: Usuario;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pokemonService: PokemonService,
    private _usuarioService: UsuarioService,
    private _entrenadorService: EntrenadorService,
    private _router:Router
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getPokemonPorId(params['idPokemon']);
        this.getEntrenadordeUsuario(params['idUsuarioActual'])
      });
  }

  ngOnInit() {
  }

  getUsuarioActualPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
  getPokemonPorId(idPokemon) {
    this._pokemonService.getPokemonPorId(idPokemon).subscribe(
      (result: any) => {
        this.itemTransferencia =  result[0];
        console.log(this.itemTransferencia);
      }
    )
  }
  getEntrenadordeUsuario(idUsuario) {
    this._entrenadorService.getEntrenadoresporUsuario(idUsuario).subscribe(
      (result: any) => {
        this.entrenadores = result[0];
        this.getPokemondeEntrenador(this.entrenadores.id);
      }
    )
  }
  getPokemondeEntrenador(idEntrenador) {
    this._pokemonService.getPokemonPorEntrenador(idEntrenador).subscribe(
      (result: any[]) => {
        this.listaPokemon = result;
      }
    )
  }
  irAPerfil(idPokemon: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/PerfilComponent', params['idUsuarioActual'], idPokemon];
        this._router.navigate(url);
      }
    );
  }
}
