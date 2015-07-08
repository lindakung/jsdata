'use strict';

app.factory('User', function(DS, DSHttpAdapter) {
	var User = DS.defineResource({
		name: 'user'
	})

	User.getUsers = function() {
		return DSHttpAdapter.GET('/api/users').then(function(response) {
			return response.data
		})
	}
})