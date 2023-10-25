angular.module('login-aluno',[])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/login", {
            templateUrl: "app/alunos/login/login.template.html",
            
            controller: "loginAlunoController"
        });
    }])

    
    .controller("loginAlunoController", function ($scope, $location) {
        $scope.login = function () {
            $location.path('/aluno/index');
        }
    });