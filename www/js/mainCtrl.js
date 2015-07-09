angular.module('starter')
.controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.clock=10;
    var timer;

    function reduceTime(){
      $scope.clock -= 1;

      if($scope.clock <= 0){
        navigator.vibrate(3000);
        $interval.cancel(timer);
      }
    }

    $scope.start = function(){
      timer = $interval(reduceTime, 1000);
    };

    $scope.reset = function(){
      $interval.cancel(timer);
      $scope.clock = 120;
    }
}]);