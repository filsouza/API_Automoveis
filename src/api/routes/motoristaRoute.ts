import { Router, Request, Response } from "express";
import MotoristaService from "../Services/MotoristaService";
import { Motorista } from "../../Entities/Motorista";

const motoristaRoute = Router();

export default (app: Router) => {
  app.use("/motorista", motoristaRoute);

  motoristaRoute.get("", async (req: Request, res: Response) => {
    try {
      const motoristaService = new MotoristaService();
      const nome: string = req.query.nome?.toString() || "";

      const motoristas = await motoristaService.findAll(nome);

      return res.status(200).json(motoristas);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  motoristaRoute.get("/findById", async (req: Request, res: Response) => {
    try {
      const motoristaService = new MotoristaService();
      const id: number = Number(req.query.id);

      const motorista = await motoristaService.findById(id);

      return res.status(200).json(motorista);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  motoristaRoute.post("/insert", async (req: Request, res: Response) => {
    try {
      const motoristaService = new MotoristaService();
      const motorista: Motorista = req.body;

      const obj = await motoristaService.insert(motorista);

      return res.status(200).json(obj);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  motoristaRoute.patch("/", async (req: Request, res: Response) => {
    try {
      const motoristaService = new MotoristaService();
      const motorista: Motorista = req.body;
      const idAtualizar: number = Number(req.query.id);

      const objAtualizado = await motoristaService.update(idAtualizar, motorista);

      return res.status(200).json(objAtualizado);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });

  motoristaRoute.delete("/", async (req: Request, res: Response) => {
    try {
      const motoristaService = new MotoristaService();
      const idDelet: number = Number(req.query.id);

      const retorno = await motoristaService.delete(idDelet);

      return res.status(200).json(retorno);
    } catch (error: any) {
      return res.status(error.statusCode || 500).send(error.message);
    }
  });
};
