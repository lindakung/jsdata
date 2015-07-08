app.controller('MainController', function($scope, DS, DSHttpAdapter, Post) {

	Post.getAllPosts().then(function(posts) {
		$scope.allPosts = posts;
	})


})