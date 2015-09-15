'use strict';

var app = angular.module('jsdataWorkshop', ['js-data', 'ui.router'])
  .config(function(DSProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');


    DSProvider.defaults.basePath = '/api';
    DSProvider.defaults.idAttribute = '_id';
    /*
    a method to the DSProvider defaults object that automatically
    checks if there is any data in the cache for a given service before 
    pinging the database
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
    removes the relations from an object before the request is sent to the DB
    */
    DSProvider.defaults.serialize = function (resource, data) {
      if (resource.relationFields && resource.relationFields.length){
        data = angular.copy(data);
        resource.relationFields.forEach(function(relation){
          if(data[relation] && typeof data[relation] === 'object') data[relation] = data[relation]._id
        })
      }
    }

  })
  



