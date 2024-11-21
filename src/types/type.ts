//se trabaja la validacion de los datos de la api con zod para estructurar y typar la informacion suministrada
import * as z from 'zod';
//tipos de datos 
export const PokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    front_default: z.string().url(),
  }),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({
        name: z.string(),
      }),
    })
  ),
});

export type Pokemon = z.infer<typeof PokemonSchema>;
