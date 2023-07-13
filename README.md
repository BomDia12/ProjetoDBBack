# Projeto de Banco de dados, Backend

## Requerimentos
 - nodeJs: versão 18 (validado para a versão 18.16.1)
 - npm (ou algum gerenciador de pacotes node similiar)
 - Postgresql: O código foi validado na versão 15
 - bash

## Como rodar
 1. Baixar as dependencias
    ```bash
      npm i
    ```
 2. Iniciar o banco de dados
    ```bash
      npm run db:create
    ```
 3. Iniciar a API
    ```bash
      npm run dev
    ```
 4. No seu terminal você deve ver a mensagem `Application started on port 8080!`
 5. Agora você já pode fazer requisições para a API no endereço `http://localhost:8080`. Todas as chamdas disponíveis estão no arquivo `/src/server.ts`

## Troubleshooting

Caso você tenha problemas na parte de criar o banco de dados, tente criar um usuário do postgres com o mesmo nome de usuário como superuser (confira isso pelo comando `whoami`). Isso pode ser feito por meio do comando `createuser --interative` sendo rodado pelo root ou pelo usuário postgres.

Este projeto não foi testado no Windows, mas funciona em sistemas UNIX.
