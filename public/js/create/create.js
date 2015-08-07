'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('createPost', {
		url: '/createPost',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl'
	})
})

app.controller('CreateCtrl', function($scope, Post, User, $state) {

	$scope.previewTrue = false;

	$scope.newPost = {
		title: '',
		body: '',
		name: ''
	}

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	// $scope.createNewPost = function() {

	// 	User.create({ name: $scope.newPost.name }).then(function(newUser) {
			
	// 		var postData = {
	// 			title: $scope.newPost.title,
	// 			body: $scope.newPost.body,
	// 			author: newUser._id
	// 		}

	// 		return Post.create(postData, {cacheResponse: false})

	// 	}).then(function(newPost) {

	// 		// growl.success("Post sumitted successfully!")
	// 		$state.go('main')

	// 	})

	// }


	
}) 