/**
 * Created by austin on 25/08/2016.
 *
  angular.module("services", [])
 .service("myService", ["dependency", MyObject]);

 // Declared elsewhere...
 function MyObject(dependency) {
    this.value = dependency.value;
}
 */

angular.module("services", [])
    .value("factor", 6)
    .service("multiplier", ["factor", Multiplier]);

function Multiplier(valueFactor) {
  this.multiply = function (controllerFactor) {
    return valueFactor * controllerFactor;
  };
}