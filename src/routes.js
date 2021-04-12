const express  = require ('express');

const routes = express.Router();

const Contact = require('../src/Controllers/ContactController')
const User = require('../src/Controllers/UserController')
const Email = require('../src/Controllers/EmailController')


routes.get('/',User.index);

// Rotas de Contatos
routes.post('/api/contacts', Contact.create)
routes.get('/api/contacts',Contact.index)

// Rotas de Usuários
routes.post('/api/usuarios',User.create);
routes.get('/api/usuarios',User.index);
routes.get('/api/usuarios.details/:_id',User.details);
routes.delete('/api/usuarios/:_id',User.delete);
routes.put('/api/usuarios',User.update);

module.exports = routes;