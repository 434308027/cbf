var demo = angular.module("demo", ["RongWebIMWidget"]);

demo.controller("main", ["$scope", "$http", "RongCustomerService", function($scope, $http, RongCustomerService) {

    RongCustomerService.init({
        appkey: "cpj2xarlc1e2n",
        token: "DYmHzE7Lp11jwymoHHMeT2ze1+jK7TSILlpgAn6GSjtmNJmJH4pMeZHkJ0tW/gbyP+FV0eKwbMk=",
        customerServiceId: "zgX1JCkl3Ctt",
        reminder: "在线咨询",
        position: RongCustomerService.Position.right,
        style: {
            width: 320
        },
        onSuccess: function(e) {
            console.log('连接成功');
        },
        onError: function(e) {
            console.log('连接失败');
        }
    });
    $scope.show = function() {
        RongCustomerService.show();
    };
    $scope.hidden = function() {
        RongCustomerService.hidden();
    };
}]);