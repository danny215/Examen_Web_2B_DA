import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {PokemonEntity} from "../Pokemon/pokemon.entity";

@Entity('entrenador')
export class EntrenadorEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombreE: string;

    @Column({ length: 500 })
    apellidoE: string;

    @Column({ length: 500 })
    fechaNacimiento: string;

    @Column('float')
    numeroMedallas: number;

    @Column()
    campeonActual: boolean;

    @Column({ length: 2000 })
    urlImg: string;

    //Relacion con usuario
    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.entrenadores)
    usuarioId: UsuarioEntity;

    //Relacion con Pokemon
    @OneToMany(
        type => PokemonEntity,
        pokemon => pokemon.entrenadorId)
    pokemons: EntrenadorEntity [];
}