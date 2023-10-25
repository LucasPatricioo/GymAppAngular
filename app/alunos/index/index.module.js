angular.module('index-aluno',[])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/aluno/index",{
        templateUrl:"app/alunos/index/index.template.html",
    })
}])

.controller("indexAlunoController", function ($scope) {

    $scope.treino_dia = [{
        titulo: "Perna",
        data_treino: "19/10/2023",
        exercicios: ["exercicio1", "exercicio2", "exercicio3", "exercicio4", "exercicio5"]
    },
    {
        titulo: "Peito/Costas",
        data_treino: "19/10/2023",
        exercicios: ["exercicio1", "exercicio2", "exercicio3", "exercicio4", "exercicio5"]
    },
    {
        titulo: "Biceps/Triceps",
        data_treino: "19/10/2023",
        exercicios: ["exercicio1", "exercicio2", "exercicio3", "exercicio4", "exercicio5"]
    },
    {
        titulo: "Cardio",
        data_treino: "19/10/2023",
        exercicios: ["exercicio1", "exercicio2", "exercicio3", "exercicio4", "exercicio5"]
    }];
});