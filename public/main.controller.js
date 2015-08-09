app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		resolve: {
			users: function(User){
				return User.findAll()
			},
			posts: function(Post, users) {
				// GET --> /api/posts
				return Post.findAll()
			}
		},
		templateUrl: '/main.html',
		controller: 'MainController'
	})
})

app.controller('MainController', function($scope, posts) {

	$scope.user = true;
	$scope.allPosts = posts;
	console.log('posts; ', posts)

})