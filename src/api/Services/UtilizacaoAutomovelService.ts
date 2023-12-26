import { UtilizacaoAutomovel } from "../../Entities/UtilizacaoAutomovel";

export default class UtilizacaoAutomovelService {
  private utilizacoes: UtilizacaoAutomovel[] = [];

  findAll(nomeMotorista?: string, automovel?: string): UtilizacaoAutomovel[] {
    if (nomeMotorista && nomeMotorista !== '' && automovel && automovel !== '') {
      return this.utilizacoes.filter((item) => item.automovelUtilizado === automovel && item.nomeMotorista === nomeMotorista);
    } 
    else if (nomeMotorista && nomeMotorista !== '') {
      return this.utilizacoes.filter((item) => item.nomeMotorista === nomeMotorista);
    }  
    else if (automovel && automovel !== '') {
      return this.utilizacoes.filter((item) => item.automovelUtilizado === automovel);
    } 
    else {
      return this.utilizacoes;
    }
  }

  findById(id: number): UtilizacaoAutomovel | undefined {
    return this.utilizacoes.find((item) => item.id === id);
  }

  insert(obj: UtilizacaoAutomovel): UtilizacaoAutomovel {
    obj.id = this.utilizacoes.length + 1;

    if (!obj.dataInicio) {
      throw new Error("Por favor informe a data de inicio da utilização");
    }

    if (!obj.nomeMotorista) {
      throw new Error("Por favor informe o motorista responsavél pela utilização");
    }

    if (!obj.automovelUtilizado) {
      throw new Error("Por favor informe o automovel utilizado");
    }

    if (!obj.motivo) {
      throw new Error("Por favor informe o motivo da utilizacao");
    }

    const motoristaJaUtilizando = this.utilizacoes.find(
      (item) => item.nomeMotorista === obj.nomeMotorista && !item.dataFim
    );

    if (motoristaJaUtilizando) {
      throw new Error(
        `O motorista ${obj.nomeMotorista}, está com uma utilização em aberto`
      );
    }

    const automovelAlugado = this.utilizacoes.find(
      (item) => item.automovelUtilizado === obj.automovelUtilizado && !item.dataFim
    );

    if (automovelAlugado) {
      throw new Error(
        `O automovel ${obj.automovelUtilizado}, já está em utilização`
      );
    }

    this.utilizacoes.push(obj);

    return obj;
  }

  update(idAtualizar: number, dataFinalizacao: Date): UtilizacaoAutomovel {
    const index = this.utilizacoes.findIndex((item) => item.id === idAtualizar);

    if (index < 0) {
      throw new Error(
        `Utilizacao Automovel de id ${idAtualizar} não encontrado`
      );
    }

    this.utilizacoes[index].dataFim = dataFinalizacao;
    return this.utilizacoes[index];
  }
}
