/**
 * Created by austin on 25/08/2016.
 */

angular.module("root", ["services"])
    .controller("index", ["$scope", "multiplier",
      function ($scope, multiplier) {
        $scope.product = multiplier.multiply(2);
      }]);