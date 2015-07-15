app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		resolve: {
			allPosts: function(User, Post) {
				console.log('hello')
				return User.findAll()
				.then(function(users){
					return Post.findAll()
				})
			}
		},
		templateUrl: '/main.html',
		controller: 'MainController'
	})
})

app.controller('MainController', function($scope, Post, User, allPosts) {

	// api/posts/

	$scope.allPosts = allPosts;

	// User.findAll()
	// .then(function(users){
	// 	Post.findAll().then(function(posts) {
	// 		$scope.allPosts = posts;
	// 		console.log('allPosts', posts)
	// 	})
	// })

})