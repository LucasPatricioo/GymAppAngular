angular.module('perfil-aluno', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/aluno/perfil", {
            templateUrl: "app/alunos/perfil/perfil.template.html"
        })
    }])

