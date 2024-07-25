$('document').ready(function () {
    $("#telefone").mask("(00) 0 0000-0000");
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false, 
            }
            
        },
        messages: {
            nome: {
                required: "Especifique seu nome!",
                minlength: "Por favor, insira mais de 2 caracteres"
            },
            email: {
                required: "Precisamos de seu endereço de email!",
                email: "Seu email deve ser no formato nome@email.com!"
            },
            mensagem: {
                required: "Por favor, digite sua mensagem!"
            }
        }
    })
})