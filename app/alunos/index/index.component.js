angular.module('index-aluno').component('indexAluno',{
    template:`<div class="container">
    <div class="row">
        <div class="col-12">
            <p class="h1">
                Bem vindo, Aluno (a)
            </p>
        </div>
    </div>
    <div class="row modal-treino-dashboard">
        <div class="col-12 col-md-6 mb-2" ng-repeat="treino_card in treino_dia">
            <div class="card card-dashboard" style="width: 21rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">{{treino_card.titulo}}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-center">{{treino_card.data_treino}}</h6>
                    <p class="card-text">
                    <table class="table">
                        <tbody>
                            <tr ng-repeat="treino in treino_card.exercicios">
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" disabled value="">
                                        <label class="form-check-label">
                                            {{treino}}
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>

                    <div class="col-12 d-grip gap-2">
                        <a href="#" class="btn btn-primary w-100" data-bs-toggle="modal"
                            data-bs-target="#modalTreino">Verificar</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
modalTreino
<!-- Modal -->
<div class="modal fade" id="modalTreino" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="modalTreinoLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalTreinoLabel">{{treino_dia[0].titulo}}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table">
                    <thead>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr ng-repeat="treino_modal in treino_dia[0].exercicios">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="">
                                    <label class="form-check-label">
                                        {{treino_modal}}
                                    </label>
                                </div>
                            </td>
                            <td class="modal-video-icon">
                                <img src="/assets/img/icons/play-icon.png" width="100%">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
            </div>
        </div>
    </div>
</div>`,
    controller: "indexAlunoController"
})