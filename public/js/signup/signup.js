'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

app.controller('SignupCtrl', function($scope) {

	// $scope.login = {};

	// $scope.sendLogin = function(userInfo) {
	// 	console.log('userInfo', userInfo)
	// }
})