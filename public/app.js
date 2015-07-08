'use strict';

var app = angular.module('jsdataWorkshop', ['js-data'])
	.config(function(DSProvider) {
		DSProvider.defaults.basePath = '/api'
	});