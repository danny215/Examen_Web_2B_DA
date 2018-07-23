import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EntrenadorEntity} from "../Entrenador/entrenador.entity";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    contrasena: string;

    @Column({ length: 2000 })
    urlImg: string;

    @OneToMany(
        type => EntrenadorEntity,
        entrenador => entrenador.usuarioId)
    entrenadores: EntrenadorEntity [];
}