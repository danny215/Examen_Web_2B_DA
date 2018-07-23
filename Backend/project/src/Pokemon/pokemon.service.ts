import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PokemonEntity} from "./pokemon.entity";
import {Like, Repository} from "typeorm";
import {EntrenadorEntity} from "../Entrenador/entrenador.entity";

@Injectable()
export class PokemonService {

    /*arregloIngredientes: IngredienteClass[] = [
        new IngredienteClass(1, 'papas', 2, 'Papas fritas', false, 'Nose', false, 1)];*/
    listaPokemon = [
        {'id': 1, 'nombrePokemon': 'papas', 'numeroPokemon': 2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20045652', 'poderEspecialDos': 'nose', 'nivel': 23, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 1},
        {'id': 2, 'nombrePokemon': 'sal', 'numeroPokemon': 2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20055652', 'poderEspecialDos': 'nose', 'nivel': 45, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 2},
        {'id': 3, 'nombrePokemon': 'aceite', 'numeroPokemon': 2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20065652', 'poderEspecialDos': 'nose', 'nivel': 65, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 4},
        {'id': 4, 'nombrePokemon': 'pimienta', 'numeroPokemon': 2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20078652', 'poderEspecialDos': 'nose', 'nivel': 23, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 5},
        {'id': 5, 'nombrePokemon': 'harina', 'numeroPokemon': 2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20085652', 'poderEspecialDos': 'nose', 'nivel': 44, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 3},
        {'id': 6, 'nombrePokemon': 'arroz', 'numeroPokemon': 2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20098652', 'poderEspecialDos': 'nose', 'nivel': 23, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 8},
        {'id': 7, 'nombrePokemon': 'avena', 'numeroPokemon': 3.2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20055652', 'poderEspecialDos': 'nose', 'nivel': 54, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 7},
        {'id': 8, 'nombrePokemon': 'leche', 'numeroPokemon': 2, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20025652', 'poderEspecialDos': 'nose', 'nivel': 12, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 7},
        {'id': 9, 'nombrePokemon': 'lenteja', 'numeroPokemon': 4.5, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20025652', 'poderEspecialDos': 'nose', 'nivel': 46, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 6},
        {'id': 10, 'nombrePokemon': 'maíz', 'numeroPokemon': 8, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20015652', 'poderEspecialDos': 'nose', 'nivel': 87, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 8},
        {'id': 11, 'nombrePokemon': 'frejol', 'numeroPokemon': 7, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20025652', 'poderEspecialDos': 'nose', 'nivel': 45, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 8},
        {'id': 12, 'nombrePokemon': 'azucar', 'numeroPokemon': 8, 'poderEspecialUno': 'sfdsfdf', 'fechaCaptura': '20095652', 'poderEspecialDos': 'nose', 'nivel': 33, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'entrenadorId': 3},
    ];

    constructor(@InjectRepository(PokemonEntity)
                private readonly pokemonRepository: Repository<PokemonEntity>){
    }

    crearPokemons() {
        for(var pokemons in this.listaPokemon) {
            const pokemon = new PokemonEntity();
            pokemon.id = this.listaPokemon[pokemons].id;
            pokemon.nombrePokemon = this.listaPokemon[pokemons].nombrePokemon;
            pokemon.numeroPokemon = this.listaPokemon[pokemons].numeroPokemon;
            pokemon.poderEspecialUno = this.listaPokemon[pokemons].poderEspecialUno;
            pokemon.poderEspecialDos = this.listaPokemon[pokemons].poderEspecialDos;
            pokemon.fechaCaptura =this.listaPokemon[pokemons].fechaCaptura;
            pokemon.nivel =  this.listaPokemon[pokemons].nivel;
            pokemon.urlImg = this.listaPokemon[pokemons].urlImg;
            const entrenador = new EntrenadorEntity();
            entrenador.id = this.listaPokemon[pokemons].entrenadorId;
            pokemon.entrenadorId = entrenador;
            this.pokemonRepository.save(pokemon);
        }
        return this.pokemonRepository.find();
    }

    async traerTodos(): Promise<PokemonEntity[]> {
        return await this.pokemonRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.pokemonRepository.find({ nombrePokemon: Like("%" + parametroBusqueda + "%") });
    }

    async traerPokemonPorEntrenador(entrenadorID): Promise<PokemonEntity[]> {
        return await this.pokemonRepository.find({where: {entrenadorId: entrenadorID}});
    }

    async traerPokemonPorId(idPokemon): Promise<PokemonEntity[]> {
        return await this.pokemonRepository.find({where: {id: idPokemon}});
    }

    /*agregarIngrediente(Pokemon: IngredienteClass): IngredienteClass[] {
        this.arregloIngredientes.push(Pokemon);
        return this.arregloIngredientes;
    }

    mostrarTodos(): IngredienteClass[] {
        return this.arregloIngredientes;
    }

    mostrarUnoPorId(idABuscar: number): IngredienteClass {
        var ingredienteId: IngredienteClass = this.arregloIngredientes.find(Pokemon => Pokemon.id == idABuscar);
        return ingredienteId;
    }

    editarUnoPorId(idABuscar: number, Pokemon: IngredienteClass ): IngredienteClass [] {
        var ingredienteId: IngredienteClass = this.arregloIngredientes.find(Pokemon => Pokemon.id == idABuscar);

        if (ingredienteId !== undefined) {
            var idArreglo = this.arregloIngredientes.indexOf(ingredienteId);
            puts(this.arregloIngredientes[idArreglo] = Pokemon);
        }
        return this.arregloIngredientes;
    }*/
}