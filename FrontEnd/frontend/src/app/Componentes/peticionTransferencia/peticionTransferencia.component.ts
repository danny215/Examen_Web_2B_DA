import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {PokemonService} from "../../Servicios/pokemon.service";
import {Usuario} from "../../Interfaces/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticionTransferencia.component.html',
  styleUrls: ['./peticionTransferencia.component.css'],
  providers: [EntrenadorService,UsuarioService, PokemonService]
})
export class PeticionTransferenciaComponent implements OnInit {

  usuario: Usuario;
  listaEntrenador = [];
  listaPokemon = [];
  usuarioActual: Usuario;

  constructor(private _activatedRoute: ActivatedRoute,
              private _entrenadorService: EntrenadorService,
              private _usuarioService: UsuarioService,
              private _pokemonService: PokemonService,
               private _router: Router,
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getUsuarioPorId(params['idUsuario']);
        this.getEntrenadorPorUsuario(params['idUsuario']);
      });
  }
  ngOnInit() {
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuario =  result[0];
      }
    )
  }
  getUsuarioActualPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
  getEntrenadorPorUsuario(idUsuario) {
    this._entrenadorService.getEntrenadoresporUsuario(idUsuario).subscribe(
      (result: any[]) => {
        this.listaEntrenador = result;
        this.getPokemonPorEntrenador(this.listaEntrenador[0].id);
      }
    );
  }
  getPokemonPorEntrenador(idEntrenador) {
    this._pokemonService.getPokemonPorEntrenador(idEntrenador).subscribe(
      (result: any[]) => {
        this.listaPokemon = result;
      }
    )
  }
  irASeleccionTransferencia(idPokemon: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/selecTransf', params['idUsuarioActual'],idPokemon];
        this._router.navigate(url);
      }
    );
  }
}
