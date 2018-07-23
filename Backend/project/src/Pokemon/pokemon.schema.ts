import * as Joi from 'joi';
//Installar Joi
export const POKEMON_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer()
            .required(),
        numeroPokemon: Joi
            .number()
            .required(),
        nombrePokemon: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,30}$/)
            .min(3)
            .max(30),
        poderEspecialUno: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,150}$/)
            .min(3)
            .max(150),
        poderEspecialDos: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,150}$/)
            .min(3)
            .max(150),
        fechaCaptura: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,150}$/)
            .min(3)
            .max(150),
        nivel: Joi
            .number()
            .required(),
        entrenadorId: Joi
            .number()
            .integer()
            .required(),
        }
    )