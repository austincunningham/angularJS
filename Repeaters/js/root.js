/**
 * Created by austin on 23/08/2016.
 */

angular.module("root", [])
    .controller("index", ["$scope", function($scope) {
      $scope.products = [
        {id: 1, name: "Hockey puck"},
        {id: 2, name: "Golf club"},
        {id: 3, name: "Baseball bat"},
        {id: 4, name: "Hurley"}
      ];
    }]);