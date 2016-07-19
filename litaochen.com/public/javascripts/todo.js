
//set up hidden form for submitting data through js
// This is the generic function for submitting data through hidden form
// It takes one parameter, which is an object populated with key/value pairs.
function post(path, method, params, target) {
    var method = method || "post"; // Set method to post by default if not specified.

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", target);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}


// submit data to server when user hit enter key
$('input').keypress(function(event) {
    if(event.which === 13) {          //detect enter key hitting
        event.preventDefault();     //prevent directly submitting the form by hitting enter
        if($(this).val()) {         // will not submit the form if no content in the input
            $("form").submit();
        }
    }
});


//strike through when clicking on an item
$('.todoItems').click(function() {
    $(this).children('.todoContent').toggleClass('done');       //children selector
});



//undo all items by clicking the option in menu bar
$('#undoall').click(function() {
   $('.todoContent').each(function(item) {
      $(this).removeClass('done');
   });
});

//finish all by oneclick
$('#finishall').click(function() {
    $('.todoContent').each(function(item) {
        $(this).addClass('done');
    });
});

//delete all the items in the todo list
