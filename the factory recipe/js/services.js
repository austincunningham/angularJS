/**
 * Created by austin on 25/08/2016.
 */

angular.module("services", [])
    .value("factor", 6)
    .factory("square", ["factor",function (factor) {
      return factor * factor;
    }]);