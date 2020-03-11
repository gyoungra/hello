myApp.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {

    // 사용자 객체를 생성
    $scope.user = {};

    // 빈 문자열로 초기화
    $scope.user.username = '';

    // 서버에 사용자 이름을 요청
    $http({
        method: 'GET',
        url: '//localhost:8080/User'
    })
        .success(function (data, status, headers, config) {
            // 서버로부터 받아온 사용자 이름을 모델에 할당!
            console.log("success")
            $scope.user.username = data.name;
            $scope.user.id = data.id;
        })
        .error(function (data, status, headers, config) {
            // 이런. 뭔가 잘못되었음! :(
            console.log("fail")
        });
}]);