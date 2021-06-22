let email = document.querySelector(".email")
let descricao = document.querySelector(".textarea")

let emailOk = false
let descricaoOk = false



function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaDescricao() {
    let txtDescricao = document.querySelector("#txtDescricao")

    if (descricao.value.length > 100) {
        txtDescricao.innerHTML = "Descrição inválida, texto muito grande, digite um máximo de 100 caracteres"
        txtDescricao.style.color = "red"
        descricaoOk = false
    } else if (descricao.value.length < 5) {
        txtDescricao.innerHTML = "Descrição inválida, digite no mínimo 5 caracteres"
        txtDescricao.style.color = "red"
        descricaoOk = false
    } else {
        txtDescricao.innerHTML = "Descrição válida"
        txtDescricao.style.color = "green"
        descricaoOk = true
    }
}

function enviarDados() {
    if (emailOk == true && descricaoOk == true) {
        alert("Formulário enviado!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}