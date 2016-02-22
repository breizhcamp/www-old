'use strict';

angular.module('programme', ['ngSanitize','hc.marked'])
  .controller('programmeCtrl', ['$scope', '$http', 'marked', function ($scope, $http, marked) {

    $scope.confs = [];
    $scope.tias = [];
    $scope.quickies = [];
    $scope.univs = [];
    $scope.labs = [];

    var toViewData = function (itemResponse) {
      var item = {name: itemResponse.name,
                  speakers: itemResponse.speakers,
                  description: marked(itemResponse.description)
                 };
      return item;
    }

    $http.get('json/2016/schedule.json').then(function (response) {

        for (var i = 0; i < response.data.length; i++) {
          switch (response.data[i].format) {
            case "Conf":
              $scope.confs.push(toViewData(response.data[i]));
              break;
            case "TiA":
              $scope.tias.push(toViewData(response.data[i]));
              break;
            case "Univ":
              $scope.univs.push(toViewData(response.data[i]));
              break;
            case "Quickie":
              $scope.quickies.push(toViewData(response.data[i]));
              break;
            case "Lab":
              $scope.labs.push(toViewData(response.data[i]));
              break;
          }
        }

    });
}]);
