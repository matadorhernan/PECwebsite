/**
 * @param email
 * @param company
 * @param subject
 * @param phone
 * @param email
 */

$('#senderbutton').click(()=>{
    console.log('Enviando Email...')
    
    $('#senderbutton').text('Enviando')
    $('#senderbutton').attr("disabled", true);
})

$('#contact-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        company: {
            required: true,
            minlength: 4
        },
        subject: {
            required: true,
            minlength: 4
        },
        phone: {
            required: true,
            minlength: 5
        },
        message: {
            required: true,
            minlength: 2
        }
    },
    errorPlacement: function(error,element) {
        return true;
    },
    // messages: {
    //     email: {
    //         required: "<i class='fa fa-exclamation-triangle'></i>Escribe tu correo",
    //         email: "<i class='fa fa-exclamation-triangle'></i>Escribe un correo valido"
    //     },
    //     company: "<i class='fa fa-exclamation-triangle'></i>Escribe el nombre de tu compañia",
    //     subject: "<i class='fa fa-exclamation-triangle'></i>Escribe el asunto",
    //     phone: "<i class='fa fa-exclamation-triangle'></i>Escribe tu telefono",
    //     message: "<i class='fa fa-exclamation-triangle'></i>Escribe tu mensaje",
    // },

    submitHandler: function (form) {
        $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "/php/contact.php",
            success: function () {
                console.log('Enviado');
                $('#senderbutton').text('Gracias')
                $('#senderbutton').attr("disabled", false);
            },
            error: function (error) {
                console.log(error);
                $('#senderbutton').text('Error')
            }
        });
    }
});