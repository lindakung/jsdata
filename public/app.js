'use strict';

var app = angular.module('jsdataWorkshop', ['js-data', 'ui.router', 'angular-growl'])
  .config(function(DSProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');


    DSProvider.defaults.basePath = '/api';
    DSProvider.defaults.idAttribute = '_id';
    /*

    modify the DSProvider as you please!
    

    ACTION: add a method to the DSProvider defaults object that automatically
    checks if there is any data in the cache for a given service before 
    pinging the database

    SOLUTION: getORFind (a function actually used in learndot)

    */
    DSProvider.defaults.getOrFind = function(service){
      var data = this.getAll();
      if (data.length) return Promise.resolve(angular.copy(data));
      else {
        return this.findAll().then(function(data){
          return angular.copy(data);
        })
      }
    };

    /*
    ACTION: add a serialize function the DSProvider defaults object that 
    removes the relations from an object before the request is sent to the DB
    (this is hard!)

    */
    DSProvider.defaults.serialize = function (resource, data) {
      if (resource.relationFields && resource.relationFields.length){
        data = angular.copy(data);
        resource.relationFields.forEach(function(relation){
          if(data[relation]) delete data[relation]
        })
      }
      return data;
    }

  })
  .config(function(growlProvider) {
    growlProvider.globalTimeToLive(4000);
  });

  
