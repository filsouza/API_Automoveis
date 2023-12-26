import * as http from "http";
import expressLoader from "./src/loaders/express";
import Logger from "./logger";
import config from "./src/config";

const main = async () => {
  try {
    const app = expressLoader();

    const porta = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    const httpServer = http.createServer(app);

    httpServer.on("error", (error: NodeJS.ErrnoException) => {
      if (error.syscall !== "listen") {
        throw error;
      }

      const bind = typeof porta === "string" ? "Pipe " + porta : "Port " + porta;

      switch (error.code) {
        case "EACCES":
          Logger.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case "EADDRINUSE":
          Logger.error(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });

    httpServer.on("listening", () => {
      Logger.info(`Server HTTP listening on: ${porta}`);
    });

    httpServer.listen(porta);
  } catch (error) {
    Logger.error("Erro durante a inicialização:", error);
  }
};

main();
