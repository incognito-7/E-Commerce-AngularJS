'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProductsCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
      $scope.category = $stateParams.category
      $scope.productsListing = [{
          product_id: '123',
          title: ' Vintage USA Navy Ship model ',
          price: 120,
          userName: 'John Doe'
      },  {
          product_id: '456',
          title: ' Rustic miniature chair set',
          price: 100,
          userName: 'Sandy Peters'
      }
  ]}])
  .controller('ProductDetailsCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
      $scope.id = $stateParams.id;
      $scope.product = {
          'title': 'Vintage USA Navy Ship model',
          'description': 'A model ship of the actual 1924 USA navy ship',
          'price': 120,
          'userName': 'John Doe'
      }
  }]);
