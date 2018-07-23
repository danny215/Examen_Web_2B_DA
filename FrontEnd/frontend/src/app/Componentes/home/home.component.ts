import {Component, Input, OnInit} from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";
import {PokemonService} from "../../Servicios/pokemon.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EntrenadorService, PokemonService, UsuarioService]
})
export class HomeComponent implements OnInit {

  datoABuscar;
  usuarioActual: Usuario;

  //Usuario
  listaUsuarios = [];
  usuario_numeroItems = 4;
  usuario_cantidadPaginas;
  usuario_listaAMostrar;
  usuario_paginaActual: number = 1;

  //Entrenador
  listaEntrenadores = [];
  entrenador_numeroItems = 2;
  entrenador_cantidadPaginas;
  entrenador_listaAMostrar;
  entrenador_paginaActual: number = 1;

  //Pokemon
  listaPokemon = [];
  pokemon_numeroItems = 4;
  pokemon_cantidadPaginas;
  pokemon_listaAMostrar;
  pokemon_paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService,
              private _entrenadorService: EntrenadorService,
              private _pokemonService: PokemonService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioPorId(params['idUsuarioActual']);
      });
  }

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(
      (result: any[]) => {
        this.listaUsuarios =  result;
        this.usuario_cantidadPaginas = this.obtenerCantidadPaginas(this.listaUsuarios,this.usuario_numeroItems);
        this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
      }
    );
    this._entrenadorService.getEntrenadores().subscribe(
      (result: any[]) => {
        this.listaEntrenadores = result;
        this.entrenador_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaEntrenadores, this.entrenador_numeroItems);
        this.entrenador_listaAMostrar = this.obtenerListaAMostrar(this.listaEntrenadores, this.entrenador_paginaActual, this.entrenador_numeroItems);
      }
    );
    this._pokemonService.getPokemon().subscribe(
      (result: any[]) => {
        this.listaPokemon = result;
        this.pokemon_cantidadPaginas = this.obtenerCantidadPaginas(this.listaPokemon, this.pokemon_numeroItems);
        this.pokemon_listaAMostrar = this.obtenerListaAMostrar(this.listaPokemon, this.pokemon_paginaActual, this.pokemon_numeroItems);
      }
    );
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }

  cargarDatosbusqueda() {

    //Usuarios
    this._usuarioService.getUsuariosBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        this.usuario_cantidadPaginas = this.obtenerCantidadPaginas(this.listaUsuarios,this.usuario_numeroItems);
        this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems);
      }
    );
    //Entrenador
    this._entrenadorService.getEntrenadorBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaEntrenadores = result;
        this.entrenador_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaEntrenadores, this.entrenador_numeroItems);
        this.entrenador_listaAMostrar = this.obtenerListaAMostrar(this.listaEntrenadores, this.entrenador_paginaActual, this.entrenador_numeroItems);
    }
    );
    //Pokemon
    this._pokemonService.getPokemonBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaPokemon = result;
        this.pokemon_cantidadPaginas = this.obtenerCantidadPaginas(this.listaPokemon, this.pokemon_numeroItems);
        this.pokemon_listaAMostrar = this.obtenerListaAMostrar(this.listaPokemon, this.pokemon_paginaActual, this.pokemon_numeroItems);
      }
    );
  }

  obtenerCantidadPaginas(lista: any [], numeroItems): number {

    let cantidadPaginas: number = lista.length/numeroItems;
    if (!Number.isInteger(cantidadPaginas)) {
      cantidadPaginas = cantidadPaginas + 1;
      cantidadPaginas = Number.parseInt(cantidadPaginas.toString());
    }
    return cantidadPaginas;
  }

  obtenerListaAMostrar(listaUsuarios: any [], paginaActual, numeroItems): any [] {
    let lista = listaUsuarios.slice(paginaActual*numeroItems - numeroItems, paginaActual*numeroItems);
    return lista;
  }

  nextUsuario() {
    this.usuario_paginaActual += 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }
  prevUsuario() {
    this.usuario_paginaActual -= 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }

  nextEntrenador() {
    this.entrenador_paginaActual += 1;
    this.entrenador_listaAMostrar = this.obtenerListaAMostrar(this.listaEntrenadores, this.entrenador_paginaActual, this.entrenador_numeroItems)
  }
  prevEntrenador() {
    this.entrenador_paginaActual -= 1;
    this.entrenador_listaAMostrar = this.obtenerListaAMostrar(this.listaEntrenadores, this.entrenador_paginaActual, this.entrenador_numeroItems)
  }

  nextPokemon() {
    this.pokemon_paginaActual += 1;
    this.pokemon_listaAMostrar = this.obtenerListaAMostrar(this.listaPokemon, this.pokemon_paginaActual, this.pokemon_numeroItems);
  }
  prevPokemon() {
    this.pokemon_paginaActual -= 1;
    this.pokemon_listaAMostrar = this.obtenerListaAMostrar(this.listaPokemon, this.pokemon_paginaActual, this.pokemon_numeroItems);
  }

  irAPeticionesDeTransferencia(idUsuario: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/petTransf', params['idUsuarioActual'] ,idUsuario];
        this._router.navigate(url);
      }
    );
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
