crudgen localhost DsK-David 2513 TesteCrudGem cliente clientes

```markdown
# CRUD Generator CLI

Um CLI (Interface de Linha de Comando) para gerar automaticamente um CRUD (Create, Read, Update, Delete) completo para uma API em Node.js com Knex.js e Express. Este projeto facilita a criação rápida de rotas, controladores e modelos para operações CRUD básicas.

## Funcionalidades

- Gera automaticamente as rotas, controladores e modelos necessários para uma API CRUD.
- Cria um arquivo de configuração do Knex.js.
- Adiciona as novas rotas ao arquivo `index.js` da aplicação.
- Exibe uma animação de loading enquanto o CRUD está sendo gerado.

## Instalação

1. **Clone o Repositório**

   Primeiro, clone o repositório do projeto:

   ```bash
   git clone https://github.com/seuusuario/crud-generator-cli.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```bash
   cd crud-generator-cli
   ```

3. **Instale as Dependências**

   Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. **Instale o CLI Globalmente**

   Para instalar o CLI globalmente no seu sistema e poder usá-lo em qualquer lugar, execute:

   ```bash
   npm install -g .
   ```

## Uso

Após a instalação, você pode usar o CLI para gerar um CRUD completo para sua API. O comando básico é:

```bash
crudgen <host> <user> <password> <database> <modelName> <tableName>
```

### Parâmetros

- `<host>`: O host do banco de dados MySQL.
- `<user>`: O nome de usuário do banco de dados MySQL.
- `<password>`: A senha do banco de dados MySQL.
- `<database>`: O nome do banco de dados MySQL.
- `<modelName>`: O nome do modelo que será criado (por exemplo, `User`).
- `<tableName>`: O nome da tabela no banco de dados MySQL (por exemplo, `users`).

### Exemplo

Para gerar um CRUD para uma tabela `users` com um modelo chamado `User`, você pode usar o comando:

```bash
crudgen localhost root password mydatabase User users
```

## Estrutura do Projeto

Após a execução do comando, a seguinte estrutura de diretórios será criada:

```
crud/
  ├── controllers/
  │   └── UserController.js
  ├── models/
  │   └── User.js
  ├── routes/
  │   └── UserRoutes.js
  ├── knexfile.js
  └── index.js
```

- **`controllers/`**: Contém o controlador com métodos para manipular a tabela.
- **`models/`**: Contém o modelo com métodos para realizar operações CRUD na tabela.
- **`routes/`**: Contém as rotas da API para acessar os métodos do controlador.
- **`knexfile.js`**: Arquivo de configuração do Knex.js.
- **`index.js`**: Arquivo principal da aplicação onde as rotas são registradas.

## Contribuição

Sinta-se à vontade para contribuir com melhorias! Para isso, faça um fork do repositório, crie uma branch com suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para mais informações ou dúvidas, entre em contato com [seuemail@dominio.com](mailto:da33.veiga@gmail.com).
```

### Instruções para o NPM
- **Instalação Global**: Após a instalação do projeto com `npm install`, você pode instalar o CLI globalmente com `npm install -g .`, onde `.` refere-se ao diretório atual. Isso permitirá que você use o comando `crudgen` de qualquer lugar no terminal.

### Adicionar ao NPM Registry
Para adicionar o pacote ao npm registry, você precisa fazer o login no npm (se ainda não estiver logado) e publicar o pacote:

1. **Faça o Login no NPM**

   ```bash
   npm login
   ```

2. **Publique o Pacote**

   Certifique-se de estar na raiz do diretório do projeto e execute:

   ```bash
   npm publish
   ```

Certifique-se de atualizar o número da versão no `package.json` antes de publicar uma nova versão.