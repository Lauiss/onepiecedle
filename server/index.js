const fastify = require("fastify")();
const jwt = require("fastify-jwt");

fastify.register(jwt, {
  secret: "unSecretSuperSecure", // Remplace par une clé secrète réelle et sécurisée
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.get(
  "/secured",
  { preHandler: fastify.auth([fastify.verifyJWT]) },
  async (request, reply) => {
    return { secured: true };
  }
);

const start = async () => {
  try {
    await fastify.listen(3000);
    console.log("Serveur Fastify en cours d'écoute sur le port 3000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
