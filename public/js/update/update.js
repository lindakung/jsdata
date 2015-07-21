'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('update', {
		url: '/update/:postId',
		templateUrl: 'js/update/update.html',
		controller: 'UpdateCtrl'
	})
})

app.controller('UpdateCtrl', function($scope, $stateParams, Post, User, growl) {

	//get all posts
	Post.find($stateParams.postId)
		.then(function(post) {
			$scope.editPost = post;
			return User.find(post.author)
	}).then(function(thisUser) {
	})
		
	$scope.updatePost = function() {
		Post.update($scope.editPost._id, {title: $scope.editPost.title, name: $scope.editPost._user.name})
		growl.success('Your post was updated!')
		$state.go('main')
	}





})