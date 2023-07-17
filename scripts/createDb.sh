# criando o banco de dados
psql postgres -c "CREATE DATABASE projetodb;"

# criando a estrutura
psql projetodb < ./sql/schema.sql

# populando o banco
psql projetodb < ./sql/seed.sql

# Criando views
psql projetodb < ./sql/view.sql

# Criando procedure
psql projetodb < ./sql/procedure.sql

# Criando funções
psql projetodb < ./sql/functions.sql
