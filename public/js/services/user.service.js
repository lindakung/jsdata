'use strict';

app.factory('User', function(DS) {
	
	return DS.defineResource({
		name: 'users'
	})

}).run(function (User) {})