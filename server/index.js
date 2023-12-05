const fastify = require('fastify')({
  logger: true
})

const GameManager = require('./game_manager/game-manager.js');

let gameManager = new GameManager();

fastify.get('/getDailyOnepiecedle', function (request,reply) {
  reply.send({daily: gameManager.getDailyOnepiecedle()})})


//check if anwser is correct frontend
fastify.get('/getAll', function(request,reply) {
  reply.send({result: gameManager.getAll()});
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
