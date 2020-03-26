const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Metodos HTTP:
 * 
 * Get: Buscar uma informação
 * Post: Criar uma informação
 * Put: Alterar uma informação
 * Delete: Remover uma informação 
 * 
 */

/**
 * Tipos de Parametros:
 * 
 * Query: Parametros nomeados, enviados na rota após "?" e concatenados por &
 * Route: Utilizados para identificar recursos (Qual o 'serviço', 'metodo')
 * Request Body: Corpo da requesição, utilizado para criar ou alterar informação
 * 
 */

 /**
  * 
  */


app.listen(3333);