var app=angular.module("app1",[]);
app.controller("controllerApp1",function ($scope,$http) {
	$http.get("index.json").then(function (req) {
		$scope.list=req.data.data;
    });
    $scope.active=-1;
    $scope.show=function(col){
    	$scope.active=col;
    }
});
