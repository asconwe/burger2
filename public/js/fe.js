$(document).ready(function () {
    $('#new-burger-button').click(function () {
        $('#new-burger-button').css('display', 'none');
        $('#new-burger-modal').css('display', 'inline');
    });

    $('form.burger').submit(function (e1) {
        console.log(e1);
        const burgerName = $(this).children('.b-name').attr('value');
        const id = $(this).children('.b-id').attr('value');
        console.log('burger', burgerName);
        $('#customer-name-modal').css('display', 'inline');
        $('#customer-name-modal').submit(function (e2) {
            const customer = $('#customer-name').val();
            $.post('/api/devour?_method=PUT', {
                id: id,
                burger_name: burgerName,
                customer: customer
            }, function (data) {
                $('#customer-name-modal').html(data.message);
                $('#customer-name-modal').append('<hr><a href="/"><button>Close</button></a>');
                });
            e2.preventDefault();
        })
        e1.preventDefault()
    })

})