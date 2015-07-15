'use strict';

app.service('Comment', function(DS, DSHttpAdapter) {
	var Comment = DS.defineResource({
		name: 'comments',
		idAttribute: '_id'
	})

	return Comment;
})