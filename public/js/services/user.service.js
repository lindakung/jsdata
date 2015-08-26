'use strict';

app.factory('User', function(DS) {
	
  /*
    create a User jsdata resource 
  */
	var User = DS.defineResource({
		name: 'users'
	})

	return User; 
})