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
	find: 			function(req,res){
		User.find({email:req.body.email}).exec(function(err,obj){
			if (err) {
				res.status(500).send({error: "Could not retrieve object"});
			} else {
				res.send(obj);
			}
		});
	},
	create: 		function(req,res){
		var user 	= new User(req.body);

		if (typeof user.email !== 'undefined'){

			// save mongo object
			user.save(function(err,obj){
				if (err){
					res.status(500).send({error:"Could not save object"});
				} else {
					res.send(obj);
				}
			});

		} else {
			res.status(500).send({error:"Invalid object values"});
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
	deactivate: 	function(req,res){
		User.find({email:req.body.email}).exec(function(err,obj){
			if (err) {
				res.status(500).send({error: "Could not retrieve object"});
			} else {
				User.findByIdAndUpdate(obj.id, { $set: {"active":0} }, function (err, obj) {
					if (err) {
						res.status(500).send({error: "Error updating obj"});
					} else {
						res.send(obj);
					}
				});
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