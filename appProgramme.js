'use strict';

angular.module('programme', ['ngSanitize','hc.marked'])
  .controller('programmeCtrl', ['$scope', '$http', 'marked', function ($scope, $http, marked) {

    $scope.jours = ['Mercredi', 'Jeudi', 'Vendredi'];
    $scope.journee = [0, 1, 2];
    $scope.journee[0] = {"visible": true};
    $scope.journee[1] = {"visible": true};
    $scope.journee[2] = {"visible": true};
    $scope.confs = [3, 4, 5];
    $scope.tias = [3, 4, 5];
    $scope.quickies = [3, 4, 5];
    $scope.univs = [3, 4, 5];
    $scope.labs = [3, 4, 5];

    var toViewData = function (itemResponse) {
      var item = {name: itemResponse.name,
                  speakers: itemResponse.speakers,
                  description: marked(itemResponse.description)
                 };
      return item;
    }

    $scope.changeJourVisible = function(index) {
      $scope.journee[index].visible = !$scope.journee[index].visible;
    }

    $http.get('json/2016/schedule.json').then(function (response) {

        for (var i = 0; i < response.data.length; i++) {
          var dateConf = (new Date(response.data[i].event_start)).getDay();
          switch (response.data[i].format) {
            case "Conf":
              if (!$scope.confs[dateConf]) $scope.confs[dateConf]=[];
              $scope.confs[dateConf].push(toViewData(response.data[i]));
              break;
            case "TiA":
              if (!$scope.tias[dateConf]) $scope.tias[dateConf]=[];
              $scope.tias[dateConf].push(toViewData(response.data[i]));
              break;
            case "Univ":
              if (!$scope.univs[dateConf]) $scope.univs[dateConf]=[];
              $scope.univs[dateConf].push(toViewData(response.data[i]));
              break;
            case "Quickie":
              if (!$scope.quickies[dateConf]) $scope.quickies[dateConf]=[];
              $scope.quickies[dateConf].push(toViewData(response.data[i]));
              break;
            case "Lab":
              if (!$scope.labs[dateConf]) $scope.labs[dateConf]=[];
              $scope.labs[dateConf].push(toViewData(response.data[i]));
              break;
          }
        }

    });
}]);
