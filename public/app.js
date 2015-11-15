'use strict';

var app = angular.module('jsdataWorkshop', ['js-data', 'ui.router'])
.config(function(DSProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    // we can set the fields that are common to all of our js-data 
    // services right here on the defaults object of the DSProvider
    // this way we keep our code as DRY as possible
    DSProvider.defaults.basePath = '/api';
    DSProvider.defaults.idAttribute = '_id';
})




