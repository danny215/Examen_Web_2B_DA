import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EntrenadorController} from "./Entrenador/entrenador.controller";
import {PokemonController} from "./Pokemon/pokemon.controller";
import {EntrenadorService} from "./Entrenador/entrenador.service";
import {AutorizacionController} from "./autorizacion.controller";
import {PokemonService} from "./Pokemon/pokemon.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {EntrenadorEntity} from "./Entrenador/entrenador.entity";
import {PokemonEntity} from "./Pokemon/pokemon.entity";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'baseweb',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          //ssl: true,
      }),
      TypeOrmModule.forFeature([EntrenadorEntity,PokemonEntity,UsuarioEntity])
  ],
  controllers: [
      AppController,
      EntrenadorController,
      PokemonController,
      AutorizacionController,
      UsuarioController],
  providers: [
      AppService,
      EntrenadorService,
      PokemonService,
      UsuarioService
     ],
})

export class AppModule {}
