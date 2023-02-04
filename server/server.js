import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import typeDefs from "./schemas/typeDefs.js";
import resolvers from "./schemas/resolvers.js";
import db from "./config/connection.js";
import mongo from "mongodb";

async function startApolloServer(typeDefs, resolvers) {
  const bucket = new mongo.GridFSBucket(db, { bucketName: "images" });
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  db.once("open", async () => {
    await new Promise((resolve) => httpServer.listen({ port: 4001 }, resolve));
    console.log(
      `🚀 Server ready at http://localhost:4001${server.graphqlPath}`
    );
  });
}

startApolloServer(typeDefs, resolvers);
