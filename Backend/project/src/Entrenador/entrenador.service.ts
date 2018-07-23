import { Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {EntrenadorEntity} from "./entrenador.entity";
import {Like, Repository} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";


@Injectable()
export class EntrenadorService {

    /*arregloComidas: ComidaClass[] = [new ComidaClass(1,'Salchi', 'Papas y salchica', 'Ecuador', 2,true)];*/

    listaEntrenadores = [
        {'id': 1, 'nombreE': 'Ash', 'apellidosE': 'Ketchup', 'fechaNacimiento': '02042016', 'numeroMedallas': 2, 'campeonActual': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 8},
        {'id': 2, 'nombreE': 'Brock', 'apellidosE': 'Steven', 'fechaNacimiento': '01061996', 'numeroMedallas': 2, 'campeonActual': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 6},
        {'id': 3, 'nombreE': 'Rojo', 'apellidosE': 'Danvers', 'fechaNacimiento': '02051995', 'numeroMedallas': 2, 'campeonActual': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 1},
        {'id': 4, 'nombreE': 'Azul', 'apellidosE': 'Grant', 'fechaNacimiento': '02042000', 'numeroMedallas': 3, 'campeonActual': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 3},
        {'id': 5, 'nombreE': 'May', 'apellidosE': 'Rose', 'fechaNacimiento': '04072012', 'numeroMedallas': 4, 'campeonActual': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 5},
        {'id': 6, 'nombreE': 'Mistique', 'apellidosE': 'Green', 'fechaNacimiento': '02021997', 'numeroMedallas': 2, 'campeonActual': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 2},
        { 'id': 7, 'nombreE': 'Willow', 'apellidosE': 'Pront', 'fechaNacimiento': '03061997', 'numeroMedallas': 5, 'campeonActual': false, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 4},
        { 'id': 8, 'nombreE': 'Jessie', 'apellidosE': 'James', 'fechaNacimiento': '06082012', 'numeroMedallas': 5, 'campeonActual': false, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 7}
    ];

    constructor(@InjectRepository(EntrenadorEntity)
                private readonly entrenadorRepository: Repository<EntrenadorEntity>){
    }

    crearEntrenadores() {
        for(var entrenadores in this.listaEntrenadores) {
            const entrenador = new EntrenadorEntity();
            entrenador.id = this.listaEntrenadores[entrenadores].id;
            entrenador.nombreE = this.listaEntrenadores[entrenadores].nombreE;
            entrenador.apellidoE = this.listaEntrenadores[entrenadores].apellidosE;
            entrenador.fechaNacimiento = this.listaEntrenadores[entrenadores].fechaNacimiento;
            entrenador.numeroMedallas =this.listaEntrenadores[entrenadores].numeroMedallas;
            entrenador.campeonActual = this.listaEntrenadores[entrenadores].campeonActual;
            entrenador.urlImg =  this.listaEntrenadores[entrenadores].urlImg;
            const usuario = new UsuarioEntity();
            usuario.id = this.listaEntrenadores[entrenadores].usuarioId;
            entrenador.usuarioId = usuario;
            this.entrenadorRepository.save(entrenador);
        }
        return this.entrenadorRepository.find();
    }

    async traerTodos(): Promise<EntrenadorEntity[]> {
        return await this.entrenadorRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.entrenadorRepository.find({ nombreE: Like("%" + parametroBusqueda + "%") });
    }

    async traerEntrenadorPorUsuario(usuarioID): Promise<EntrenadorEntity[]> {
        return await this.entrenadorRepository.find({where: {usuarioId: usuarioID}});
    }

    /*agregarComida(entrenador: ComidaClass): ComidaClass[] {
        this.arregloComidas.push(entrenador);
        return this.arregloComidas;
    }

    mostrarTodos(): ComidaClass[] {
        return this.arregloComidas;
    }

    mostrarUnoPorId(idABuscar: number): ComidaClass {
        var entrenadorId: ComidaClass = this.arregloComidas.find(entrenador => entrenador.id == idABuscar);
        return entrenadorId;
    }

    editarUnoPorId(idABuscar: number, entrenador: ComidaClass ): ComidaClass [] {
        var entrenadorId: ComidaClass = this.arregloComidas.find(entrenador => entrenador.id == idABuscar);
        if (entrenadorId !== undefined) {
            var idArreglo = this.arregloComidas.indexOf(entrenadorId);
            puts(this.arregloComidas[idArreglo] = entrenador);
        }
        return this.arregloComidas;
    }*/
}
