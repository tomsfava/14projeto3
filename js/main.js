$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
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
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor insira seu nome",
                minlength: "Seu nome precisa conter dois ou mais caracteres"
            },
            email: {
                required: "Por favor insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            mensagem: {
                required: "Você precisa escrever sua mensagem"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
})