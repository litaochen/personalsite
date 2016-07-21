
//sending post reuest through XMLHTTPRequest
function updateStatus(path, newStatus) {
    var xhttp = new XMLHttpRequest();
    var url = path;
    var params = "status=" + newStatus;

    xhttp.open('post', url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) { //got success response from server
            data = xhttp.responseText;
        }else {
            console.log(xhttp.status);
            $('.result').text("Something wrong with the query, please try again later!");
        }
    }
    xhttp.send(params);
}


//function for updating the status of an item
function update(todoContent, newsts) {
    var newStatus;
    if(typeof(newsts) === 'undefined') {            //set default status from current element
        newStatus = !$(todoContent).hasClass('done');
    }
    else {
        newStatus = newsts;
    }

    var id = $(todoContent).attr('id');
    updateStatus('/todo/' + id, newStatus);
}

//function to redirect to another page by javascript (for delete all buton)
function redirect (url) {
    window.location.replace(url);
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



//remove element when clicking on the delete icon
$('.delete').click(function() {
    var todelete = $(this).next();
    update(todelete, "delete");
    redirect('/todo');
});


//strike through when clicking on an item and send update request to the backend
//Here we use post method to send data (Strictly spiking I should use put method)
$('.todoItems').click(function() {
    update($(this).children('.todoContent'));
    $(this).children('.todoContent').toggleClass('done');       //children selector
});


//undo all items by clicking the option in menu bar
$('#undoall').click(function() {
   $('.todoContent').each(function() {
       update(this, false);
      $(this).removeClass('done');
   });
});

//finish all by oneclick
$('#finishall').click(function() {
    $('.todoContent').each(function() {
        update(this, true);
        $(this).addClass('done');
    });
});

//delete all the items in the todo list
$('#deleteall').click(function() {
    $('.todoContent').each(function() {
        update(this, "delete");
        redirect("/todo");
    });
});