import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barraSuperior.component.html',
  styleUrls: ['./barraSuperior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  @Input() nombreUsuario;
  @Input() imgUsuario;

  constructor() { }

  ngOnInit() {
  }

}
