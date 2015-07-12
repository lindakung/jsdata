app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController'
	})
})

app.controller('MainController', function($scope, Post, User) {

	// api/posts/

	User.findAll()
	.then(function(users){
		Post.findAll().then(function(posts) {
			$scope.allPosts = posts;
			console.log('allPosts', posts)
		})
	})

})