app.config(function($stateProvider) {
	$stateProvider.state('createPost', {
		url: '/createPost',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl'
	})
})

app.controller('CreateCtrl', function($scope, Post, User) {


	$scope.newPost = {
		title: '',
		body: '',
		name: ''
	}


	$scope.createNewPost = function() {
		console.log($scope.newPost.name)
		User.create($scope.newPost.name).then(function(newUser) {
			console.log('new author', newUser)
		})
			Post.create($scope.newPost).then(function(article) {

				article.author = $scope.newPost.name;
				console.log('this is article', article)
			})


	}
}) 