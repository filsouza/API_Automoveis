import * as express from "express";
import { NextFunction, Request, Response } from "express";import routes from "../api/index";
import config from "../config/index";

const expressLoader = () => {
  const app = express();

  app.get("/status", (_, res) => {
    res.status(200).end();
  });

  app.head("/status", (_, res) => {
    res.status(200).end();
  });

  // Middleware que transforma a string bruta do req.body em JSON
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Carregar rotas da API
  app.use(config.api.prefix, routes());

  // Middleware para lidar com rotas não encontradas
  app.use((_req, _res, next) => {
    const err = new NotFoundError("Not Found");
    next(err);
  });

  // Middleware para lidar com erros específicos
  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    if (err instanceof NotFoundError) {
      res.status(404).json({ error: "Not Found" });
    } else {
      next(err);
    }
  });

  // Middleware de erro genérico
  app.use((err: Error, _req: Request, res: Response) => {
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  });

  return app;
};

class NotFoundError extends Error {}

export default expressLoader;
