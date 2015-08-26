'use strict';

app.factory('Post', function(DS) {

	/*
		create a js-data POST resource that establishes a relationship 
		between posts and users

	*/
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