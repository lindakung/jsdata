'use strict';

app.factory('User', function(DS, DSHttpAdapter) {
	var User = DS.defineResource({
		name: 'user',
		methods: {
			addUser: function(name) {
				return this.DS
			}
		}
	})
})