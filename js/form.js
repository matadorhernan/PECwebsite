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
    messages: {
        email: {
            required: "<i class='fa fa-exclamation-triangle'></i>Enter your email address",
            email: "<i class='fa fa-exclamation-triangle'></i>Enter a valid email address"
        },
        company: "<i class='fa fa-exclamation-triangle'></i>Enter your company's name",
        subject: "<i class='fa fa-exclamation-triangle'></i>Title your subject",
        phone: "<i class='fa fa-exclamation-triangle'></i>Enter your phone",
        message: "<i class='fa fa-exclamation-triangle'></i>Enter your message",
    },
    submitHandler: function (form) {
        $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "php/contact.php",
            success: function () {
                $('.msg-content').addClass('d-none')
                $('.msg-content').removeClass('d-block')
                $('.bar-maxmin').text('Thank you!')
                mesageshow = false
            },
            error: function () {
                $('.msg-content').addClass('d-block')
                $('.msg-content').removeClass('d-none')
                $('.bar-maxmin').text('Error, Please Reload')
                mesageshow = false
            }
        });
    }
});