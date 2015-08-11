'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('createPost', {
		url: '/createPost',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl', 
		resolve: {
			author: function(User){
				return User.find("55ae90ec395b2b9078628da4")
			}
		}
	})
})

app.controller('CreateCtrl', function($scope, Post, author, $state) {

	$scope.previewTrue = false;

	$scope.newPost = {
		title: '',
		body: '',
		name: author.name
	}

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.createNewPost = function() {
		var postData = {
			title: $scope.newPost.title,
			body: $scope.newPost.body, 
			author: author._id
		}

		Post.create(postData)
		.then(function(newPost) {
			$state.go('main')
		})
	}	
}) 