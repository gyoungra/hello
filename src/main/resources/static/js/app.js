var myApp = angular.module('myApp', []);

//$scope 는 DOM의 현재 요소/영역을 참조하며(this 와는 다르다), 요소안의 데이터와 로직을 주시하는 아주 멋진 관찰 기능을 가지고 있다.
myApp.controller('MainCtrl', ['$scope', function ($scope) {
    // Controller magic
    $scope.text = 'Hello, Angular fanatic.';
}]);