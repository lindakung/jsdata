'use strict';

app.service('Post', function(DS, DSHttpAdapter) {
	var Post = DS.defineResource({
		name: 'posts',
		relations: {
			hasMany: {
				localField: 'comments',
				foreignKey: 'postId'
			}
		},
		belongsTo: {
			user: {
				localField: 'user',
				localKey: 'userId'
			}
		},
		methods: {
			addPost: function() {
				return this.DSUpdate('/api/posts').then(function(newPost) {

				})
			}
		}

	})

	Post.getAllPosts = function() {
		return DSHttpAdapter.GET('/api/posts').then(function(response) {
			return response.data;
		})
	}

	return Post;
}).run(function(DS, DSHttpAdapter, Post, Comment) {});