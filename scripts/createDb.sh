#!/bin/bash
read -p "Escreva o nome do seu usuário postgresql: " user

# criando o banco de dados
psql postgres $user -c "CREATE DATABASE projetodb;"

# criando a estrutura
psql projetodb $user < ./sql/schema.sql

# populando o banco
psql projetodb $user < ./sql/seed.sql
