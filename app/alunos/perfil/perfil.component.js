angular.module('perfil-aluno').component('perfilAluno',{
    template:`<div class="container">
    <div class="row">

    </div>
    <section id="perfil_usuario">
        <header>
            <div class="row text-center mb-3">
                <div class="col-12">
                    <!-- <div class="rounded-circle card-dashboard" style="background-color: red; width: 200px; height:200px;"></div> -->
                    <img src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2023/06/07082010/arnold_schwarzenegger-.jpg"
                        class="rounded-circle card-dashboard imagem-perfil-usuario">
                </div>
            </div>
            <div class="row text-center mb-3">
                <div class="col-12">
                    <p class="h1">Arnold Schwarzenegger</p>
                </div>
            </div>
        </header>
        <div class="container card modal-treino-dashboard">
            <div class="mb-3 col-12 col-md-12">
                <label for="exampleFormControlInput1" class="form-label">Nome</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Arnold">
            </div>
            <div class="mb-3 col-12 col-md-12">
                <label for="exampleFormControlInput1" class="form-label">Sobrenome</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Schwarzenegger">
            </div>
            <div class="mb-3 col-12 col-md-12">
                <label for="exampleFormControlInput1" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="arnold@mail.com">
            </div>
            <div class="mb-3 col-12 col-md-12">
                <label for="exampleFormControlInput1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="***************">
            </div>
            <div class="col-12">
                <button class="btn btn-primary" style="width: 100%;" type="button">Salvar</button>
            </div>
        </div>
    </section>
</div>`
})