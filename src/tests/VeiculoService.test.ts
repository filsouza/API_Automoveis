import VeiculoService from "../api/Services/VeiculoService";

describe("VeiculoService", () => {
  it("Deve retornar um array vazio inicialmente", () => {
    const service = new VeiculoService();
    const veiculos = service.findAll();
    expect(veiculos).toHaveLength(0);
  });

  it("Deve lançar uma exceção ao tentar deletar um veículo que não existe", () => {
    const service = new VeiculoService();
    const deleteFunction = () => {
      service.delete(1);
    };

    expect(deleteFunction).toThrow("Veículo não encontrado para exclusão");
  });

  it("Deve cadastrar um novo veículo e retornar o objeto cadastrado", () => {
    const service = new VeiculoService();
    const novoVeiculo = service.insert({
      cor: "azul",
      marca: "Ford",
      placa: "XYZ-1234",
    });

    expect(novoVeiculo).toEqual({
      id: 1,
      cor: "azul",
      marca: "Ford",
      placa: "XYZ-1234",
    });
  });

  it("Deve deletar o veículo cadastrado e retornar a mensagem de sucesso", () => {
    const service = new VeiculoService();
    service.insert({
      cor: "verde",
      marca: "Chevrolet",
      placa: "ABC-5678",
    });

    const mensagemDeletar = service.delete(1);

    expect(mensagemDeletar).toEqual("Veículo deletado com sucesso");
  });

  it("Deve atualizar as informações do veículo e retornar o objeto atualizado", () => {
    const service = new VeiculoService();
    service.insert({
      cor: "vermelho",
      marca: "Fiat",
      placa: "DEF-9876",
    });

    const veiculoAtualizado = service.update(1, {
      cor: "preto",
      marca: "Toyota",
      placa: "GHI-5432",
    });

    expect(veiculoAtualizado).toEqual({
      id: 1,
      cor: "preto",
      marca: "Toyota",
      placa: "GHI-5432",
    });
  });

  it("Deve retornar um array de tamanho 2 filtrado pela marca do veículo", () => {
    const service = new VeiculoService();

    service.insert({
      cor: "amarelo",
      marca: "Volkswagen",
      placa: "JKL-4321",
    });
    service.insert({
      cor: "branco",
      marca: "Volkswagen",
      placa: "MNO-8765",
    });
    service.insert({
      cor: "preto",
      marca: "Chevrolet",
      placa: "PQR-1098",
    });

    const veiculosFiltrados = service.findAll("", "Volkswagen");

    expect(veiculosFiltrados).toHaveLength(2);
  });

  it("Deve lançar uma exceção ao tentar cadastrar um veículo sem informar a cor", () => {
    const service = new VeiculoService();
    const cadastrarSemCor = () => {
      service.insert({
        cor: "",
        marca: "Chevrolet",
        placa: "STU-2468",
      });
    };

    expect(cadastrarSemCor).toThrow("Informe a cor do veículo");
  });

  it("Deve retornar um array com 1 objeto filtrado pelo id do veículo", () => {
    const service = new VeiculoService();

    service.insert({
      cor: "azul",
      marca: "Ford",
      placa: "VWX-1357",
    });

    const veiculoFiltrado = service.findById(1);

    expect(veiculoFiltrado).toHaveLength(1);
    expect(veiculoFiltrado[0]).toEqual({
      id: 1,
      cor: "preto",
      marca: "Toyota",
      placa: "GHI-5432",
    });
  });
});
