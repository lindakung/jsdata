var LocalStrategy = require('passport-local').Strategy;

var User = require('../routes/users/user-model.js');

module.exports = function(passport) {

	//serialize and deserialize for persistent login
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({

		usernameField: 'name',
		passwordField: 'password',
		passReqToCallback: true
	},

	function(req, name, password, done) {

		process.nextTick(function() {
			User.findOne({'local.name' : name }, function(err, user) {
				if(err)
					return done(err);

				if(user) {
					return done(null, false, req.flash('signupMessage', 'That name is already taken.'));
				} else {
					var newUser = new User();

					newUser.local.name = name;
					newUser.local.password = newUser.generateHash(password);

					newUser.save(function(err) {
						if(err)
							throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));

	passport.use('local-login', new LocalStrategy({

		usernameField: 'name',
		passwordField: 'password',
		passReqToCallback: true
	},

	function(req, email, password, done) {
		User.findOne({'local.name' : name}, function(err, user) {
			if(err)
				return done(err);

			if(!user)
				return done(null, false, req.flash('loginMessage', 'No user found.'));

			if(!user.validPassword(password))
				return done(null, false, req.flash('loginMessage', "Wrong Password'"));

			return done(null, user);
			
		});
	}));

};