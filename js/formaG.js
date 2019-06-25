/**
 * @param email
 * @param company
 * @param subject
 * @param phone
 * @param email
 */

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
            minlength: 6
        },
        message: {
            required: true,
            minlength: 10
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
            url: "php/contact.php",
            success: function () {
                $('#senderbutton').text('Gracias')
            },
            error: function () {
                $('#senderbutton').text('Error')
            }
        });
    }
});