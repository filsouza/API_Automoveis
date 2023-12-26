import { Router, Request, Response } from "express";
import VeiculoService from "../Services/VeiculoService";
import { Veiculo } from "../../Entities/Veiculo";

const veiculoRoute = Router();

export default (app: Router) => {
  app.use("/veiculo", veiculoRoute);

  veiculoRoute.get("", async (req: Request, res: Response) => {
    try {
      const veiculoService = new VeiculoService();
      const cor: string = req.query.cor?.toString() || "";
      const marca: string = req.query.marca?.toString() || "";

      const veiculos = await veiculoService.findAll(cor, marca);

      return res.status(200).json(veiculos);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  veiculoRoute.get("/findById", async (req: Request, res: Response) => {
    try {
      const veiculoService = new VeiculoService();
      const id: number = Number(req.query.id);

      const veiculo = await veiculoService.findById(id);

      return res.status(200).json(veiculo);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  veiculoRoute.post("/insert", async (req: Request, res: Response) => {
    try {
      const veiculoService = new VeiculoService();
      const veiculo: Veiculo = req.body;

      const obj = await veiculoService.insert(veiculo);

      return res.status(200).json(obj);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  veiculoRoute.patch("/", async (req: Request, res: Response) => {
    try {
      const veiculoService = new VeiculoService();
      const veiculo: Veiculo = req.body;
      const idAtualizar: number = Number(req.query.id);

      const objAtualizado = await veiculoService.update(idAtualizar, veiculo);

      return res.status(200).json(objAtualizado);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  veiculoRoute.delete("/", async (req: Request, res: Response) => {
    try {
      const veiculoService = new VeiculoService();
      const idDelet: number = Number(req.query.id);

      const retorno = await veiculoService.delete(idDelet);

      return res.status(200).json(retorno);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });
};
