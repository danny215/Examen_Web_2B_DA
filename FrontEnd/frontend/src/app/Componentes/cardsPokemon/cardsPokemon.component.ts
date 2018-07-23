import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../../Servicios/pokemon.service";

@Component({
  selector: 'app-cards-pokemon',
  templateUrl: './cardsPokemon.component.html',
  styleUrls: ['./cardsPokemon.component.css']
})
export class CardsPokemonComponent implements OnInit {

  listaPokemon = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this._pokemonService.getPokemon().subscribe(
      (result: any[]) => {
        this.listaPokemon = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaPokemon.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaPokemon.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
  }

}
