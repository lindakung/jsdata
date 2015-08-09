'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		/*
				loading the data that I need: 
		*/
		resolve: {
			users: function(User){
				// GET - > '/api/users'
				return User.findAll()
			}
		}
	})
});

app.controller('PostCtrl', function($scope, $stateParams, Post, $state, users) {

	// GET --> /api/posts/:id   retrieve single post 
	Post.find($stateParams.postId)
		.then(function(post) {
			console.log('post: ', post)
			$scope.thisPost = post;
		})

	$scope.delete = function() {
		Post.destroy($stateParams.postId)
		// growl.success('Post deleted')
		alert('Post deleted!')  //use the growl service 
		$state.go('main')
	}

})