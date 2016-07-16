// submit data to server when user hit enter key
$('input').keypress(function(event) {
    if(event.which === 13) {          //detect enter key hitting
        event.preventDefault();     //prevent directly submitting the form by hit enter
        if($(this).val()) {         // will not submit the form if no content in the input
            $("form").submit();
        }
    }
});


