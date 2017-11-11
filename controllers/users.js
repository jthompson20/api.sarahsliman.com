var User 	= require('../models/user');

var users 	= {
	all: 			function(req,res){
		User.find({},function(err,obj){
			if (err){
				res.status(500).send({error:"Could not retrieve objects"});
			} else {
				res.send(obj);
			}
		});
	},
	one: 			function(req,res){
		User.find({_id:req.params.id}).exec(function(err,obj){
			if (err) {
				res.status(500).send({error: "Could not retrieve object"});
			} else {
				res.send(obj);
			}
		});
	},
	create: 		function(req,res){
		var user 	= new User(req.body);

		console.log('>> user',user);
		console.log('>> body',req.body);
		console.log('>> params',req.params);

		if (typeof user.email !== 'undefined'){

			// save mongo object
			user.save(function(err,obj){
				if (err){
					res.status(500).send({error:"Could not save object"});
				} else {
					res.send(obj);
				}
			});

		}
	},
	update: 		function(req,res){
		User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, obj) {
			if (err) {
				res.status(500).send({error: "Error updating obj"});
			} else {
				res.send(obj);
			}
		});
	},
	delete: 		function(req,res){
		User.find({_id: req.params.id}).remove().exec(function(err,obj){
			if (err) {
				res.status(500).send({error: "Error deleting obj"});
			} else {
				res.send(obj);
			}
		});
	}
};

module.exports = users;