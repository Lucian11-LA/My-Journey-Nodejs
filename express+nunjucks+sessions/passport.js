var db = require('./db');
var passport = require('passport');
var LocalStrategy = require('passport-local').LocalStrategy;

passport.use(new LocalStrategy((username,password,done)=>{

	db('users')
	.where("username",username)
	.first()
	.then((user)=>{
		if(!user || user.password != password)
			return done(null,false);
		done(null,user);	
	},done);
}));

passpor.deserializerUser((id,done)=>{
	db("users")
	.where("id",id)
	.first()
	.then((user)=>{
		done(null,user)
	},done);
});