const express = require('express');
const connection = require("./database/connection");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");


const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.post("/session", SessionController.create)

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;

/**
* Rotas / Recursos
*/

/** 
* Métodos HTTP:
* 
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no backend
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após a interrogação. (filtros, paginação, ...)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar/alterar recursos
 */

/**
 * Banco de dados:
 * 
 * SQL: SQLite, MySQL...
 * NoSQL: MongoDB, ...
 */

 /**
  * Driver: SELECT * FROM users;
  * Query Builder: table('users').select('*').where()...
  */
