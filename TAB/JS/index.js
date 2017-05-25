var app=angular.module("app2",[]);
app.controller("app2Controller",function ($scope,$http) {
   $http.get("index.json").then(function (result) {
       $scope.data=result.data.data;
   });

});
app.directive("myHello",function () {
    return{
        restrict:"ACE",
        replace:"true",
        scope:{data:"="},
        template:"<div>" +
        "<ul>" +
            "<li ng-repeat='x in data' ng-bind='x.title' ng-class={active:$index==active} ng-click='show($index)'></li>" +
        "</ul>" +
        "<p ng-repeat='x in data' ng-bind='x.content' ng-show='$index==active'></p>" +
        "</div>",
        link:function (scope,element,attr) {
            scope.active=0;
            scope.show=function (a) {
                scope.active=a;
            }
        }
    }
});
