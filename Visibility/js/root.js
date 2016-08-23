/**
 * Created by austin on 23/08/2016.
 */

angular.module("root", [])
    .controller("index", ["$scope", function($scope) {
      $scope.isFirstElementVisible = true;
      $scope.isSecondElementVisible = true;
      $scope.message = "Hello World";
    }]);