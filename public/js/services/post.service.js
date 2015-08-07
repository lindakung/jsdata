'use strict';

app.factory('Post', function(DS) {
	var Post = DS.defineResource({
		name: 'posts', 
		relations: {
			belongsTo: {
				users: {
					localKey: 'authorId',
					localField: 'author'
					}
			}
		}
	})

	return Post;

}).run(function(Post) {})