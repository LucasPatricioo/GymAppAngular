angular.module('agenda-aluno')
    .component('agendaAluno', {
        template: `
        
<div class="container">
    <div class="text-center">
        <h1>Agenda</h1>
    </div>
    <div class="card text-center">

        <table class="table table-striped-columns modal-treino-dashboard">
            <thead>
                <th class="square-calendario">Dom</th>
                <th class="square-calendario">Seg</th>
                <th class="square-calendario">Ter</th>
                <th class="square-calendario">Qua</th>
                <th class="square-calendario">Qui</th>
                <th class="square-calendario">Sex</th>
                <th class="square-calendario">Sab</th>
            </thead>
            <tbody>
                <tr ng-repeat="semana in dias">
                    <td ng-repeat="dia in semana" class="square-calendario" style="height:5em;border: 1px solid #595959">{{dia}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
        controller: "agendaAlunoController"
    });