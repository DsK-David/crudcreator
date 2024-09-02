 ---

# CRUDGEN CLI

Uma CLI (Interface de Linha de Comando) para gerar automaticamente um CRUD completo para APIs em Node.js utilizando Knex.js e Express. Este projeto acelera o desenvolvimento, criando rapidamente rotas, controladores e modelos para operações CRUD básicas.

## Funcionalidades

- **Geração Automática:** Cria rotas, controladores e modelos para uma API CRUD em segundos.
- **Configuração do Knex.js:** Gera automaticamente o arquivo de configuração do Knex.js.
- **Integração Simplificada:** Adiciona as novas rotas ao arquivo `index.js` da aplicação.
- **Feedback Visual:** Exibe uma animação de loading enquanto o CRUD está sendo gerado, proporcionando uma experiência de uso amigável.

## Instalação

### 1. Clone o Repositório

Clone o repositório do projeto para sua máquina local:

```bash
git clone https://github.com/DsK-David/crudgen.git
```
```bash
npm install crudgen -g
```

### 2. Acesse o Diretório do Projeto

Navegue até o diretório do projeto:

```bash
cd crudgen
```

### 3. Instale as Dependências

Instale todas as dependências necessárias:

```bash
npm install
```

### 4. Instale o CLI Globalmente

Para usar a CLI em qualquer lugar do seu sistema, instale-a globalmente:

```bash
npm install -g .
```

## Uso

Depois de instalada, a CLI pode ser usada para gerar um CRUD completo para sua API com o comando:

```bash
crudgen <host> <user> <password> <database> <modelName> <tableName>
```

### Parâmetros

- **`<host>`**: O host do banco de dados MySQL.
- **`<user>`**: O nome de usuário do banco de dados MySQL.
- **`<password>`**: A senha do banco de dados MySQL.
- **`<database>`**: O nome do banco de dados MySQL.
- **`<modelName>`**: O nome do modelo a ser criado (ex: `User`).
- **`<tableName>`**: O nome da tabela no banco de dados MySQL (ex: `users`).

### Exemplo de Uso

Para gerar um CRUD para a tabela `users` com um modelo chamado `User`, execute:

```bash
crudgen localhost root password mydatabase User users
```

## Estrutura do Projeto

Ao executar o comando, a seguinte estrutura de diretórios será criada:

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

- **`controllers/`**: Contém os controladores com métodos para manipular as tabelas.
- **`models/`**: Contém os modelos com métodos para realizar operações CRUD nas tabelas.
- **`routes/`**: Contém as rotas da API para acessar os métodos dos controladores.
- **`knexfile.js`**: Arquivo de configuração do Knex.js.
- **`index.js`**: Arquivo principal onde as rotas são registradas.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b feature/sua-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para a branch (`git push origin feature/sua-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se tiver alguma dúvida ou sugestão, entre em contato através do e-mail [da33.veiga@gmail.com](mailto:da33.veiga@gmail.com).

## Publicação no NPM

### Instalação Global

Depois de instalar o projeto localmente, você pode instalar o CLI globalmente com:

```bash
npm install -g .
```

### Publicando no NPM Registry

1. **Login no NPM**

   Faça o login na sua conta do NPM:

   ```bash
   npm login
   ```

2. **Publicação do Pacote**

   Certifique-se de estar no diretório raiz do projeto e execute:

   ```bash
   npm publish
   ```

**Nota:** Não se esqueça de atualizar o número da versão no `package.json` antes de publicar uma nova versão.

---