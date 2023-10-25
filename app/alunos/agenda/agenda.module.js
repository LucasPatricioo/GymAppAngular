angular.module('agenda-aluno',[])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/aluno/agenda", {
            templateUrl: "app/alunos/agenda/agenda.template.html",
        });

        $routeProvider.otherwise({ redirectTo: "/aluno/agenda" });
    }]);



angular.module('agenda-aluno')
.controller("agendaAlunoController", function ($scope) {

    $scope.dias = {
        semana1: [1, 2, 3, 4, 5, 6, 7],
        semana2: [8, 9, 10, 11, 12, 13, 14],
        semana3: [15, 16, 17, 18, 19, 20, 21],
        semana4: [22, 23, 24, 25, 26, 27, 28],
        semana5: [29, 30, 31, "", " ", "  ", "    "]
    }
})