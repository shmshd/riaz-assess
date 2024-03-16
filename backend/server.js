const fastify = require('fastify')({
  logger: true
});

fastify.register(require('@fastify/cors'), {
  origin: false
})

fastify.register(require('@fastify/mysql'), {
  promise: true,
  connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
});

fastify.register(require('./routes/root'));

fastify.register(require('./routes/todos'));

fastify.listen({ host: process.env.ADDRESS, port: parseInt(process.env.PORT, 10) }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})