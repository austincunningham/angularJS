/**
 * Created by austin on 25/08/2016.
 */

angular.module("root", ["services"])
    .controller("index", ["$scope", "square", "factor", function($scope, square, factor) {
      $scope.product = square;
      $scope.message = factor;
      
    }]);
