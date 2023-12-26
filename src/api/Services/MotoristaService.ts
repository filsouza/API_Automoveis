import { Motorista } from "../../Entities/Motorista";

export default class MotoristaService {
  private motoristas: Motorista[] = [];

  findAll(nome?: string): Motorista[] {
    if (nome) {
      return this.motoristas.filter((item) => item.nome === nome);
    } else {
      return this.motoristas;
    }
  }

  findById(id: number): Motorista | undefined {
    return this.motoristas.find((item) => item.id === id);
  }

  insert(obj: Motorista): Motorista {
    if (!obj.nome) {
      throw new Error("Nome do motorista não informado");
    }

    obj.id = this.motoristas.length + 1;
    this.motoristas.push(obj);

    return obj;
  }

  update(idAtualizar: number, motorista: Motorista): Motorista {
    if (!motorista.nome) {
      throw new Error("Nome do motorista não informado");
    }

    const index = this.motoristas.findIndex((item) => item.id === idAtualizar);
    if (index < 0) {
      throw new Error(`Motorista de id ${idAtualizar} não encontrado`);
    }

    this.motoristas[index].nome = motorista.nome;

    return this.motoristas[index];
  }

  delete(idDeletar: number): string {
    const index = this.motoristas.findIndex((item) => item.id === idDeletar);
    if (index < 0) {
      throw new Error("Motorista não encontrado para ser deletado");
    }

    this.motoristas.splice(index, 1);
    return "Motorista deletado";
  }
}
