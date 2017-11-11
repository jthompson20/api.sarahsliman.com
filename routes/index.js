var express 	= require('express');
var router 		= express.Router();

var users 		= require('../controllers/users.js');

// users
router.get('/users', 			users.all);
router.get('/user/:id', 		users.one);
router.post('/user', 			users.create);
router.get('/user/find/:email', 		users.find);
router.get('/user/active/:email', 		users.active);
router.get('/user/deactivate/:email', 	users.deactivate);
router.put('/user/:id', 		users.update);
router.delete('/user/:id', 		users.delete);

module.exports = router;