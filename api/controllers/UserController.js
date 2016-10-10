/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login:function(req,res){
	    var params=req.body;
		User.find(params).exec(function(err,respond){
			if(!respond.length){
				return res.json({code:0});
			}else{
				return res.json({code:1});
			}
		})
	}
};

