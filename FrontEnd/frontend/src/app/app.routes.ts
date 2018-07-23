import {Routes} from "@angular/router";
import {HomeComponent} from "./Componentes/home/home.component";
import {LoginComponent} from "./Componentes/login/login.component";
import {PeticionTransferenciaComponent} from "./Componentes/peticionTransferencia/peticionTransferencia.component";
import {SeleccionTransferenciaComponent} from "./Componentes/seleccionTransferencia/seleccionTransferencia.component";
import {PerfilComponent} from "./Componentes/perfil/perfil.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent},
  {
    path: 'home/:idUsuarioActual',
    component: HomeComponent},
  {
    path: 'petTransf/:idUsuarioActual/:idUsuario',
    component: PeticionTransferenciaComponent},
  {
    path: 'selecTransf/:idUsuarioActual/:idPokemon',
    component: SeleccionTransferenciaComponent},
  {
    path: 'perfil/:idUsuarioActual',
    component: PerfilComponent}
  /*{
    path: 'modeloPaciente/:idPaciente/modeloMedicamento/:idMedicamento',
    component: ModeloMedicamentoComponent },
  {
    path: 'modeloPaciente/:idPaciente',
    component: ModeloPacienteComponent,
    children: [{
      path: 'modeloMedicamento/:idMedicamento',
      component: ModeloMedicamentoComponent
    }]
  }*/
];
