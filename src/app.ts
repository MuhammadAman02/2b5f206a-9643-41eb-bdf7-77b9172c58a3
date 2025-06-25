import Fastify from 'fastify';
import { fruitRoutes } from './routes/fruit.route';
import { AppError } from './utils/AppError';

const app = Fastify({
  logger: {
    level: 'info',
  },
});

// Register routes
app.register(fruitRoutes);

// Global error handler
app.setErrorHandler((error, request, reply) => {
  if (error instanceof AppError) {
    reply.status(error.statusCode).send({ error: error.message });
  } else {
    console.error('Unhandled error:', error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
});

// Health check endpoint
app.get('/api/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

export default app;