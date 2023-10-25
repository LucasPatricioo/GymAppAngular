angular.module('dashboard-desempenho-aluno', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/aluno/dashboard-desempenho", {
            templateUrl: "app/alunos/dashboard-desempenho/dashboard-desempenho.template.html",
        });
    }])

    .controller("dashboardAlunoController", function ($scope) {
        const ctx = document.getElementById('dashDesempenho');


        new Chart(ctx, {
            data: {
                labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
                datasets: [{
                    label: 'Dias frequentados',
                    data: [1, 7, 3, 5, 2, 3, 5],
                    type: 'bar',
                    borderWidth: 1
                },
                {
                    label: 'Dias faltados',
                    data: [1, 7, 3, 5, 2, 3, 5],
                    type: 'line',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });