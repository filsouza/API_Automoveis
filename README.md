# API_Automoveis
### Este repositório contém um teste técnico desenvolvido para empresa Seidor.

* Para executar o projeto, siga os passos abaixo:

  1. Faça o download ou clone do repositório.
  2. Abra o projeto no Visual Studio Code.
  3. Execute o comando `yarn install` no terminal para instalar as dependências do projeto.

* Após a instalação das dependências, siga os passos abaixo:

  1. Rode o comando `yarn run dev` para iniciar a aplicação.
  2. Por padrão, a aplicação estará disponível na porta 4000. Se desejar alterar a porta, vá até o arquivo `.env` na raiz do projeto e ajuste a configuração, por exemplo, `PORT=0` para `PORT=5000`.

* Para executar os testes, utilize o comando:

## Rotas Disponíveis
#### Dica: Para facilitar, utilize as coleções no diretório Postman_Collections do projeto no Postman para testar os ENDPOINTS.

### Veículo 
  1. **Cadastrar:** 
      - Endpoint: [http://localhost:4000/api/veiculo/insert](http://localhost:4000/api/veiculo/insert)
      - Corpo da Requisição: 
        ```json
        { "placa": "ABC-0A00", "cor": "BRANCO", "marca": "FIAT" }
        ```

  2. **Buscar pelo Identificador:**
      - Endpoint: [http://localhost:4000/api/veiculo/findById?id=1](http://localhost:4000/api/veiculo/findById?id=1)

  3. **Buscar Todos os Veículos:**
      - Endpoint: [http://localhost:4000/api/veiculo/](http://localhost:4000/api/veiculo/)
      - Para busca por marca ou cor, adicione esses parâmetros à URL, por exemplo: [http://localhost:4000/api/veiculo/?marca=FIAT&cor=BRANCO](http://localhost:4000/api/veiculo/?marca=FIAT&cor=BRANCO)

  4. **Atualizar:**
      - Endpoint: [http://localhost:4000/api/veiculo/?id=1](http://localhost:4000/api/veiculo/?id=1)
      - Deve ser informado o identificador que será atualizado via query.
      - Corpo da Requisição (exemplo): 
        ```json
        {"cor": "azul"}
        ```

  5. **Deletar:**
      - Endpoint: [http://localhost:4000/api/veiculo/?id=1](http://localhost:4000/api/veiculo/?id=1)
      - Deve ser informado o identificador do veículo que será deletado via query.

### Motorista 
  1. **Cadastrar:** 
      - Endpoint: [http://localhost:4000/api/motorista/insert](http://localhost:4000/api/motorista/insert)
      - Corpo da Requisição: 
        ```json
        { "nome": "Felipe" }
        ```

  2. **Buscar pelo Identificador:**
      - Endpoint: [http://localhost:4000/api/motorista/findById?id=1](http://localhost:4000/api/motorista/findById?id=1)

  3. **Buscar Todos os Motoristas:**
      - Endpoint: [http://localhost:4000/api/motorista/](http://localhost:4000/api/motorista/)
      - Para busca por marca ou nome, adicione esse parâmetro à URL, por exemplo: [http://localhost:4000/api/motorista/?nome=Felipe](http://localhost:4000/api/motorista/?nome=Felipe)

  4. **Atualizar:**
      - Endpoint: [http://localhost:4000/api/motorista/?id=1](http://localhost:4000/api/motorista/?id=1)
      - Deve ser informado o identificador que será atualizado via query.
      - Corpo da Requisição (exemplo): 
        ```json
        {"nome": "Pedro"}
        ```

  5. **Deletar:**
      - Endpoint: [http://localhost:4000/api/motorista/?id=1](http://localhost:4000/api/motorista/?id=1)
      - Deve ser informado o identificador do motorista que será deletado via query.
   
### Utilização de Automóvel
  1. **Criar Registro de Utilização:**
      - Endpoint: [http://localhost:4000/api/utilizacaoAutomovel](http://localhost:4000/api/utilizacaoAutomovel)
      - Corpo da Requisição (exemplo):
        ```json
        {
            "dataInicio": "2023-08-23",
            "nomeMotorista": "Jose",
            "automovelUtilizado": "GOL",
            "motivo": "Emprestimo"
        }
        ```

  2. **Finalizar a Utilização:**
      - Endpoint: [http://localhost:4000/api/utilizacaoAutomovel?id=1](http://localhost:4000/api/utilizacaoAutomovel?id=1)
      - Deve ser informado via query o ID que será encerrado.
      - Corpo da Requisição (exemplo):
        ```json
        {"dataFinalizacao":"2023-08-2023"}
        ```


