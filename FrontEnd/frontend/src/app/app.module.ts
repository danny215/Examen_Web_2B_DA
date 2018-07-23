import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Componentes/home/home.component';
import { CardsUsuarioComponent } from './Componentes/cardsUsuario/cardsUsuario.component';
import { CardsEntrenadorComponent } from './Componentes/cardsEntrenador/cardsEntrenador.component';
import { CardsPokemonComponent } from './Componentes/cardsPokemon/cardsPokemon.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BarraSuperiorComponent } from './Componentes/barraSuperior/barraSuperior.component';
import {MatIconModule} from '@angular/material/icon';
import { PeticionTransferenciaComponent } from './Componentes/peticionTransferencia/peticionTransferencia.component';
import { SeleccionTransferenciaComponent } from './Componentes/seleccionTransferencia/seleccionTransferencia.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardsUsuarioComponent,
    CardsEntrenadorComponent,
    CardsPokemonComponent,
    BarraSuperiorComponent,
    PeticionTransferenciaComponent,
    SeleccionTransferenciaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      {
        useHash: true}),
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
