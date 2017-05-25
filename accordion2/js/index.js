/**
 * Created by hzjs170511 on 2017/5/24.
 */
var app = angular.module("myApp", []);
app.controller("myAppController",function ($scope,$http) {
    $http.get("index.json").then(function (result) {
        $scope.list=result.data.data;
    })
});
app.directive("myDirective", function() {
    return {
        //E元素名使用  C类名使用    A 属性名使用   M注释使用
        restrict:"ACE",
        replace:"true",
        scope:{
            list:"="
        },
        template:"<div>"+
                    "<div class='content-box'  ng-repeat='listLi in list'>"+
                        "<p class='title'  ng-bind='listLi.title' ng-click='show($index)'></p>"+
                        "<div  ng-class=\"{'list':$index!=active,'listA':$index==active}\" ng-bind='listLi.content'></div>"+
                    "</div>"+
                "</div>",
        link:function (scope,element,attr) {
            scope.active=0;
            scope.show=function (index) {
                scope.active=index;
            }
        }
    };
});
