'use strict';

app.service('Comment', function(DS, DSHttpAdapter) {
	var Comment = DS.defineResource({
		name: 'comments'
	})

	Comment.getAllComments = function() {
		return DSHttpAdapter.GET('/api/comments').then(function(response) {
			return response.data
		})
	}

	return Comment;
}).run(function(Comment) {})