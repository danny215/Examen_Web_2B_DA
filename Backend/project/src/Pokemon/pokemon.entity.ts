import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EntrenadorEntity} from "../Entrenador/entrenador.entity";

@Entity('Pokemon')
export class PokemonEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('float')
    numeroPokemon: number;

    @Column({ length: 500 })
    nombrePokemon: string;

    @Column({ length: 500 })
    poderEspecialUno: string;

    @Column({ length: 500})
    poderEspecialDos: string;

    @Column({length: 500})
    fechaCaptura: string;

    @Column()
    nivel: number;

    @Column({ length: 2000 })
    urlImg: string;

    //Relacion con entrenador
    @ManyToOne(
        type => EntrenadorEntity,
        entrenador => entrenador.pokemons)
    entrenadorId: EntrenadorEntity;
}