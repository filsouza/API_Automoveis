import MotoristaService from "../api/Services/MotoristaService";

describe("MotoristaService", () => {
  it("Deve retornar um array vazio ao buscar todos os motoristas inicialmente", () => {
    // Arrange
    const motoristaService = new MotoristaService();

    // Act
    const motoristas = motoristaService.findAll();

    // Assert
    expect(motoristas).toHaveLength(0);
  });

  it("Deve retornar o motorista cadastrado corretamente", () => {
    // Arrange
    const motoristaService = new MotoristaService();
    const novoMotorista = { id: 1, nome: "Felipe Alves" };

    // Act
    const motoristaCadastrado = motoristaService.insert(novoMotorista);

    // Assert
    expect(motoristaCadastrado).toEqual(novoMotorista);
  });

  it("Deve retornar a mensagem de sucesso ao deletar um motorista", () => {
    // Arrange
    const motoristaService = new MotoristaService();

    // Act
    const mensagemDeletar = motoristaService.delete(1);

    // Assert
    expect(mensagemDeletar).toEqual("Motorista deletado");
  });

  it("Deve lançar uma exceção ao tentar cadastrar um motorista sem nome", () => {
    // Arrange
    const motoristaService = new MotoristaService();

    // Act & Assert
    expect(() => motoristaService.insert({ id: 1, nome: "" })).toThrow("Nome do motorista não informado");
  });

  it("Deve retornar o motorista atualizado corretamente", () => {
    // Arrange
    const motoristaService = new MotoristaService();

    // Act
    const motoristaAtualizado = motoristaService.update(1, { nome: "José" });

    // Assert
    expect(motoristaAtualizado).toEqual({ id: 1, nome: "José" });
  });

  it("Deve retornar o motorista correto ao buscar por ID", () => {
    // Arrange
    const motoristaService = new MotoristaService();

    // Act
    const motoristaEncontrado = motoristaService.findById(1);

    // Assert
    expect(motoristaEncontrado).toEqual([{ id: 1, nome: "José" }]);
  });
});
