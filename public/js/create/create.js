'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('createPost', {
		url: '/createPost',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl'
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope) {

	$scope.previewTrue = false;

	$scope.newPost = {
		title: '',
		body: '',
		name: ''
	}

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	/*

	create a function that 
	1 - creates the user if it isn't already in the db
	2 - persists the ng-modeled post object 
	3 - changes the state to 'main' 

	*/
	
}) 