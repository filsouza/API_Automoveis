import UtilizacaoAutomovelService from "../api/Services/UtilizacaoAutomovelService";

const dataInicioUtilizacao = new Date();

describe("UtilizacaoAutomovelService", () => {
  it("Deve retornar a utilização cadastrada corretamente", () => {
    const service = new UtilizacaoAutomovelService();

    // Arrange
    const utilizacaoCadastrada = service.insert({
      automovelUtilizado: "gol",
      dataInicio: dataInicioUtilizacao,
      motivo: "testes",
      nomeMotorista: "felipe_alves",
    });

    // Assert
    expect(utilizacaoCadastrada).toEqual({
      id: 1,
      automovelUtilizado: "gol",
      dataInicio: dataInicioUtilizacao,
      motivo: "testes",
      nomeMotorista: "felipe_alves",
    });
  });

  it("Não deve permitir que um veículo em utilização seja utilizado novamente", () => {
    const service = new UtilizacaoAutomovelService();

    // Arrange
    const dataInicio = new Date(dataInicioUtilizacao);
    const respostaErro = () => {
      // Act
      service.insert({
        automovelUtilizado: "gol",
        dataInicio: dataInicio,
        motivo: "Motivo2",
        nomeMotorista: "Seidor",
      });
    };

    // Assert
    expect(respostaErro).toThrowError("O automóvel gol já está em utilização");
  });

  it("Não deve permitir que um motorista em utilização utilize outro veículo", () => {
    const service = new UtilizacaoAutomovelService();

    // Arrange
    const dataInicio = new Date(dataInicioUtilizacao);
    const respostaErro = () => {
      // Act
      service.insert({
        automovelUtilizado: "gol",
        dataInicio: dataInicio,
        motivo: "Motivo2",
        nomeMotorista: "felipe_alves",
      });
    };

    // Assert
    expect(respostaErro).toThrowError(
      "O motorista felipe_alves está com uma utilização em aberto"
    );
  });

  it("Deve retornar a utilização do veículo com a data final atualizada corretamente", () => {
    const service = new UtilizacaoAutomovelService();
    const dataFinalizacao = new Date();

    // Act
    const utilizacaoAtualizada = service.update(1, dataFinalizacao);

    // Assert
    expect(utilizacaoAtualizada).toEqual({
      id: 1,
      automovelUtilizado: "gol",
      dataInicio: dataInicioUtilizacao,
      motivo: "testes",
      nomeMotorista: "felipe_alves",
      dataFim: dataFinalizacao,
    });
  });

  it("Deve retornar a utilização cadastrada com o mesmo motorista após o encerramento da anterior", () => {
    const service = new UtilizacaoAutomovelService();
    const dataInicio = new Date();

    // Arrange
    const utilizacaoCadastrada = service.insert({
      automovelUtilizado: "gol",
      dataInicio: dataInicio,
      motivo: "Motivo2",
      nomeMotorista: "Seidor",
    });

    // Assert
    expect(utilizacaoCadastrada).toEqual({
      id: 2,
      automovelUtilizado: "gol",
      dataInicio: dataInicio,
      motivo: "Motivo2",
      nomeMotorista: "Seidor",
    });
  });
});
