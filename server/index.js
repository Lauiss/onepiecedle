
const dotenv = require('dotenv').config();

const fastify = require('fastify')({
  logger: true
})

const cron = require('node-cron');

const GameManager = require('./game_manager/game-manager.js');

let gameManager = new GameManager();

fastify.register(require('fastify-jwt'), {
  secret: process.env.SECRET_KEY
})

cron.schedule('0 0 * * *', () => {
  getDailyOnepiecedle();
  console.log()});

fastify.decorate("authenticate", async (request, reply) => {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.send(err)
  }})
  
    fastify.get('/getDailyArray', { onRequest: [fastify.authenticate] } , function (request,reply) {
      reply.send({daily: gameManager.getDailyArray()})
    })
    
    //check if anwser is correct frontend
    fastify.get('/getAll', { onRequest: [fastify.authenticate] } , function(request,reply) {
      reply.send({result: gameManager.getAll()});
    })

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
