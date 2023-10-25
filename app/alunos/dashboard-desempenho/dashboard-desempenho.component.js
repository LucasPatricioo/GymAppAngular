angular.module('dashboard-desempenho-aluno')
.component('dashboardDesempenhoAluno',{
    template: `
    <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h1>Dashboard</h1>
            </div>
        </div>
            
        <div class="row">
            <div class=" col-12">
                <canvas id="dashDesempenho"></canvas>
            </div>
        </div>
    </div>`,
    controller: "dashboardAlunoController"
})