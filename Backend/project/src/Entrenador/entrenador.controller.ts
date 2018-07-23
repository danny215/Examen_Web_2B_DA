import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {EntrenadorService} from "./entrenador.service";
import {EntrenadorEntity} from "./entrenador.entity";

@Controller('Entrenador')
export class EntrenadorController {

    constructor(private _entrenadorService: EntrenadorService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const entrenador = await this._entrenadorService.traerTodos();
        return response.send(entrenador);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._entrenadorService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('/porUsuario/:idUsuario')
    async obtenerEntrenadorPorUsuario(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._entrenadorService.traerEntrenadorPorUsuario(paramParams.idUsuario);
        return response.send(usuarios);
    }

    @Post()
    async crearEntrenadorB() {
        const entrenadores = this._entrenadorService.crearEntrenadores();
        return entrenadores;
    }

    /*@Get('/:id')
    obtenerUno(
        @Param() paramParams,
        @Res() response
    ) {
        const comidaPorId = this._entrenadorService.mostrarUnoPorId(paramParams.id);

        if (comidaPorId === undefined) {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
            )
        } else {
            return response.send(comidaPorId);
        }
    }

    @Put('/:id')
    editarUno(
        @Param() paramParams,
        @Body(new GeneralPipe(COMIDA_SCHEMA)) comidaArgumento,
        @Res() response
    ) {
        if (this._entrenadorService.mostrarUnoPorId(paramParams.id) !== undefined) {
            return response.send(this._entrenadorService.editarUnoPorId(paramParams.id, comidaArgumento));
        } else {
            throw new NoEncontradoException(
                'No se encontro ningun elemento para editar con ese id',
                'error',
                4
            )
        }
    }*/
}