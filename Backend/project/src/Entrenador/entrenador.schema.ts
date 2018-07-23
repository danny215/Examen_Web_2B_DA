import * as Joi from 'joi';
//Installar Joi
export const ENTRENADOR_SCHEMA = Joi
    .object()
    .keys({
            id: Joi
                .number()
                .integer()
                .required(),
            nombreE: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{3,30}$/)
                .min(3)
                .max(30),
            apellidosE: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{5,40}$/)
                .min(5)
                .max(40),
            fechaNacimiento: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z]{3,30}$/)
                .min(3)
                .max(30),
            numeroMedallas: Joi
                .number()
                .integer()
                .required(),
            campeonActual: Joi
                .boolean()
                .required(),
        }
    )