'use strict';

app.directive('navbar', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/navbar/navbar.html',
		link: function(scope) {
			scope.user = true;
		}
	}
});