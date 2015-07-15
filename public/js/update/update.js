app.config(function($stateProvider) {
	$stateProvider.state('update', {
		url: '/update/:id',
		templateUrl: 'js/update/update.html',
		controller: 'UpdateCtrl'
	})
})

app.controller('UpdateCtrl', function($scope, $stateParams))