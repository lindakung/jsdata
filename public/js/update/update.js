app.config(function($stateProvider) {
	$stateProvider.state('update', {
		url: '/update/:postId',
		templateUrl: 'js/update/update.html',
		controller: 'UpdateCtrl'
	})
})

app.controller('UpdateCtrl', function($scope, $stateParams, Post, User) {

	//get all posts
	Post.find($stateParams.postId)
		.then(function(post) {
			$scope.editPost = post;
			return User.find(post.author)
	}).then(function(thisUser) {
		var updatedTitle = $scope.editPost.title;

		$scope.updatePost = function() {
			console.log('updated input name', updatedTitle)
			Post.update($scope.editPost._id, {title: updatedTitle})
		}
	})





})