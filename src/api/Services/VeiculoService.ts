import { Veiculo } from "../../Entities/Veiculo";

export default class VeiculoService {
  private veiculos: Veiculo[] = [];

  findAll(cor?: string, marca?: string): Veiculo[] {
    if (cor !== "" && marca !== "") {
      return this.veiculos.filter((item) => item.cor === cor && item.marca === marca);
    } else if (cor !== "") {
      return this.veiculos.filter((item) => item.cor === cor);
    } else if (marca !== "") {
      return this.veiculos.filter((item) => item.marca === marca);
    } else {
      return this.veiculos;
    }
  }

  findById(id: number): Veiculo | undefined {
    return this.veiculos.find((item) => item.id === id);
  }

  insert(obj: Veiculo): Veiculo {
    obj.id = this.veiculos.length + 1;

    if (!obj.cor) {
      throw new Error("Informe a cor do veiculo");
    }
    if (!obj.marca) {
      throw new Error("Informe a marca do veiculo");
    }
    if (!obj.placa) {
      throw new Error("Informe a placa do veiculo");
    }

    this.veiculos.push(obj);
    return obj;
  }

  update(idAtualizar: number, veiculo: Veiculo): Veiculo {
    const index = this.veiculos.findIndex((item) => item.id === idAtualizar);

    if (index < 0) {
      throw new Error(`Veiculo de id ${idAtualizar} não encontrado`);
    }

    if (veiculo.cor) {
      this.veiculos[index].cor = veiculo.cor;
    }
    if (veiculo.marca) {
      this.veiculos[index].marca = veiculo.marca;
    }
    if (veiculo.placa) {
      this.veiculos[index].placa = veiculo.placa;
    }

    return this.veiculos[index];
  }

  delete(idDeletar: number): string {
    const index = this.veiculos.findIndex((item) => item.id === idDeletar);
    if (index < 0) {
      throw new Error("Veiculo não encontrado para ser deletado");
    }

    this.veiculos.splice(index, 1);
    return "Veiculo deletado";
  }
}
