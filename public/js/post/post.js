app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl'
	})
});

app.controller('PostCtrl', function($scope, $stateParams, Post) {

	Post.find($stateParams.postId)
		.then(function(post) {
			$scope.thisPost = post;
			console.log('post', $scope.thisPost)
		})

})