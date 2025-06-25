import { FastifyRequest, FastifyReply } from 'fastify';
import { getFruits } from '../services/fruit.service';
import { AppError } from '../utils/AppError';

export async function getFruitsHandler(
  req: FastifyRequest<{ Querystring: { limit: number } }>,
  res: FastifyReply
) {
  try {
    const fruits = getFruits(req.query.limit);
    
    res.status(200).send({
      fruits,
      count: fruits.length,
    });
  } catch (error: any) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).send({ error: error.message });
    }
    return res.status(500).send({ error: 'Internal server error' });
  }
}