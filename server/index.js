const fastify = require('fastify')({
  logger: true
})

const GameManager = require('./game_manager/game-manager.js');

let gameManager = new GameManager();

// to get data for daily games
fastify.get('/getDailyOnepiecedle', function (request,reply) {
  reply.send({daily: gameManager.getDailyOnepiecedle()})})

// to get all the characters for user propositions 
// TO TEST
fastify.get('/getAll', function(request,reply) {
  console.log(request);
  reply.send({result: gameManager.getAll(request.section)});
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
