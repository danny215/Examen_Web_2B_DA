import {Component, Input, OnInit} from '@angular/core';
import {EntrenadorService} from "../../Servicios/entrenador.service";

@Component({
  selector: 'app-cards-entrenador',
  templateUrl: './cardsEntrenador.component.html',
  styleUrls: ['./cardsEntrenador.component.css']
})
export class CardsEntrenadorComponent implements OnInit {

  listaEntrenadores = [];
  numeroItems = 2;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _entrenadorService: EntrenadorService) { }

  ngOnInit() {
    this._entrenadorService.getEntrenadores().subscribe(
      (result: any[]) => {
        this.listaEntrenadores = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaEntrenadores.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaEntrenadores.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
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
