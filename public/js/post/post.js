'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl'
	})
});

app.controller('PostCtrl', function($scope, $stateParams, Post, $state) {

	// Post.find($stateParams.postId)
	// 	.then(function(post) {
	// 		$scope.thisPost = post;
	// 	})

	// $scope.delete = function() {
	// 	Post.destroy($stateParams.postId)
	// 	// growl.success('Post deleted')
	// 	alert('Post deleted!')  //use the growl service 
	// 	$state.go('main')
	// }

})