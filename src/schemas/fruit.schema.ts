import { z } from 'zod';

export const getFruitsSchema = {
  querystring: z.object({
    limit: z.coerce.number().int().positive().max(40).default(20),
  }),
  response: {
    200: z.object({
      fruits: z.array(z.string()),
      count: z.number(),
    }),
  },
};