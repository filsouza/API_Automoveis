import { Router, Request, Response } from "express";
import UtilizacaoAutomovelService from "../Services/UtilizacaoAutomovelService";
import { UtilizacaoAutomovel } from "../../Entities/UtilizacaoAutomovel";

const utilizacaoAutomovelRoute = Router();

export default (app: Router) => {
  app.use("/utilizacaoAutomovel", utilizacaoAutomovelRoute);

  utilizacaoAutomovelRoute.get("", async (req: Request, res: Response) => {
    try {
      const utilizacaoAutomovelService = new UtilizacaoAutomovelService();

      const nomeMotorista: string = req.query.nomeMotorista?.toString() || "";
      const automovel: string = req.query.automovel?.toString() || "";

      const utilizacoes = await utilizacaoAutomovelService.findAll(nomeMotorista, automovel);

      return res.status(200).json(utilizacoes);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  utilizacaoAutomovelRoute.post("/", async (req: Request, res: Response) => {
    try {
      const utilizacaoAutomovelService = new UtilizacaoAutomovelService();
      const utilizacao: UtilizacaoAutomovel = req.body;

      const obj = await utilizacaoAutomovelService.insert(utilizacao);

      return res.status(200).json(obj);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  utilizacaoAutomovelRoute.patch("/", async (req: Request, res: Response) => {
    try {
      const utilizacaoAutomovelService = new UtilizacaoAutomovelService();

      const idAtualizar: number = Number(req.query.id);
      const dataFinalizacao: Date = req.body.dataFinalizacao as Date;

      const objAtualizado = await utilizacaoAutomovelService.update(
        idAtualizar,
        dataFinalizacao
      );

      return res.status(200).json(objAtualizado);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });
};
