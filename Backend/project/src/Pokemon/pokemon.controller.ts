import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {PokemonService} from "./pokemon.service";
import {PokemonEntity} from "./pokemon.entity";

@Controller('Pokemon')
export class PokemonController {

    constructor(private _pokemonService: PokemonService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const pokemons = await this._pokemonService.traerTodos();
        return response.send(pokemons);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._pokemonService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('porEntrenador/:idEntrenador')
    async obtenerPokemonPorEntrenador(
        @Param() paramParams,
        @Res() response
    ) {
        const pokemons = await this._pokemonService.traerPokemonPorEntrenador(paramParams.idEntrenador);
        return response.send(pokemons);
    }
    @Get('por/id/:idPokemon')
    async obtenerPokemonPorId(
        @Param() paramParams,
        @Res() response
    ) {
        const pokemon = await this._pokemonService.traerPokemonPorId(paramParams.idPokemon);
        return response.send(pokemon);
    }

    @Post()
    async crearPokemonsB() {
        const pokemons = this._pokemonService.crearPokemons();
        return pokemons;
    }

    /*@Post()
    crearIngrediente(
        @Body(new GeneralPipe(INGREDIENTES_SCHEMA)) ingredienteArgumento
    ): IngredienteClass[] {
        const Pokemon = ingredienteArgumento;
        return this._pokemonService.agregarIngrediente(Pokemon);
    }

    @Get('/:id')
    obtenerUno(
        @Param() paramParams,
        @Res() response
    ) {
        const ingredientePorId = this._pokemonService.mostrarUnoPorId(paramParams.id);
        const error = (ingredientePorId === undefined);
        if (error) {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
                )
        } else {
            return response.send(ingredientePorId);
        }
    }

    @Put('/:id')
    editarUno(
        @Param() paramParams,
        @Body(new GeneralPipe(INGREDIENTES_SCHEMA)) ingredienteArgumento,
        @Res() response
    ) {
        if (this._pokemonService.mostrarUnoPorId(paramParams.id) !== undefined) {
            return response.send(this._pokemonService.editarUnoPorId(paramParams.id, ingredienteArgumento));
        } else {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
            )
        }
    }*/
}