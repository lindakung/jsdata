'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function(User){
				// GET --> /api/users
				return User.findAll()
			},
			posts: function(Post, users) {
				// GET --> /api/posts
				return Post.findAll({}, {bypassCache: true})
			}
		}
	})
})

app.controller('MainController', function($scope, posts) {

	$scope.allPosts = posts;
	console.log('posts: ', posts)
 
})


