import { Router } from "express";
import veiculoRoute from "./routes/veiculoRoute";
import motoristaRoute from "./routes/motoristaRoute";
import utilizacaoAutomovelRoute from "./routes/utilizacaoAutomovelRoute";

export default () => {
  const app = Router();
  veiculoRoute(app);
  motoristaRoute(app);
  utilizacaoAutomovelRoute(app);
  return app;
};
