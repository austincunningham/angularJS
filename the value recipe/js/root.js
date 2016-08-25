/**
 * Created by austin on 25/08/2016.
 */

angular.module("root", ["services"])
    .controller("index", ["$scope", "message", function($scope, message) {
      $scope.message = message;
      
    }]);
