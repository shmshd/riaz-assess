const fastify = require('fastify')({
  logger: true
})
fastify.register(require('@fastify/mysql'), {
  connectionString: `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
});

fastify.register(require('./routes/root'));

fastify.register(require('./routes/todos'));

fastify.listen({ host: "0.0.0.0", port: 4000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})