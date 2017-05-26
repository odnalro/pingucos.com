$(function () {







    function test() {
        alert(' aqui e praça sete')
    }

    //   $('#nome').click(test)




    function clicknome() {
        alert("aqui e praça sete")
    }
    // $("#nome").click(clicknome)


    function enviardados(e) {
        e.preventDefault();

        email = $("#email").val()
        nome = $("#nome").val()
        nascimento = $("#nascimento").val()
        cpf = $("#cpf").val()
        if (nome != "eric") {
            nome = "isma e um viadao"
        }
        texto = "O cadastro em nome de " + nome+
        ",cpf: "+cpf+
        ", nascido em "+nascimento+
        " e email "+email
        alert(texto)
    }

    $("#meuform").submit(enviar dados)






}) 