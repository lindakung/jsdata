'use strict';

app.factory('Post', function(DS) {
	var Post = DS.defineResource({
		name: 'posts', 
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