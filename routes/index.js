var express 	= require('express');
var router 		= express.Router();

var users 		= require('../controllers/users.js');

// users
router.get('/users', 			users.all);
router.get('/user/:id', 		users.one);
router.post('/user', 			users.create);
router.post('/user/find', 		users.find);
router.get('/user/active', 	users.active);
router.get('/user/deactivate', users.deactivate);
router.put('/user/:id', 		users.update);
router.delete('/user/:id', 		users.delete);

module.exports = router;