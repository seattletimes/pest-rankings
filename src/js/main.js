// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("angular");

var app = angular.module("pest-rankings", []);

app.controller("PestController", ["$scope", function($scope) {
  $scope.cities = pestData;

  $scope.headers = [
    { title: "Rats", short: "rats", icon: "rat.png" },
    { title: "Mice", short: "mice", icon: "mouse.png" },
    { title: "Roaches", short: "roaches", icon: "roach.png" },
    { title: "*Unknown", short: "other_rodents", icon: "unknown2.png" },
    { title: "Total", short: "total" }
  ];

  $scope.selected = $scope.headers[4];
  $scope.expanded = false;

  $scope.sortTable = function(header) {
    $scope.selected = header;
    $scope.cities.sort(function(a, b) {
      a = a[header.short];
      b = b[header.short];
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else if (a == b) {
        return 0;
      }
    });
  };
}]);
