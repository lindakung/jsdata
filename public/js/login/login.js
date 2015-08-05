'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'js/login/login.html',
		controller: 'LoginCtrl'
	})
})

app.controller('LoginCtrl', function($scope) {

	$scope.login = {};

	$scope.sendLogin = function(userInfo) {
		console.log('userInfo', userInfo)
	}
})