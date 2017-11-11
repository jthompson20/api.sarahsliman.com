var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
//var ObjectId 	= mongoose.Schema.Types.ObjectId;

var user 	= new Schema({
	email: 		String,
	firebase: 	String,
	stripe: 	String,
	meta: 		{
		height: 	String,
		weight: 	String,
		goal: 		String
	},
	active: 	{
		type: 		Number,
		default: 	1
	},
});

module.exports 	= mongoose.model('User',user);