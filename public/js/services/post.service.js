'use strict';

app.factory('Post', function(DS) {
	var Post = DS.defineResource({
		name: 'posts', 
		idAttribute: '_id',
		relations: {
			belongsTo: {
				users: {
					localKey: 'author',
					localField: '_user'
					}
			}
		}
	})

	return Post;

}).run(function(Post) {})