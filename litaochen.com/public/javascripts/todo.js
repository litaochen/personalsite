
// scroll to the anchor point on click of navbar items
//*****************************************
$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
}


$('.navbar a').click(function(event) {
    event.preventDefault();
    // check if the element exists in current page then scroll
    var element = $(this).attr("href");
    if (!$(element).length) {                           //The element is not here, go to the element on index page
        window.location.replace("/" + element);
    } else {                                            //found element, let us scroll
        $(element).scrollView();
    }
});
//*****************************************


//set up hidden form for submitting data through js
//***************************************************
// This is the function used to actually send the data
// It takes one parameter, which is an object populated with key/value pairs.
function postData(data) {
    var DataForm = document.createElement("form"),      //create hidden form for data submit
        node = document.createElement("input");             //create hidden input field for data entry

    DataForm.action = "/todo";
    DataForm.method = "POST";

    for(var name in data) {                             //put the data into the hidden form and send out
        node.name  = name;
        node.value = data[name].toString();
        DataForm.appendChild(node.cloneNode());
    }

    // To be sent, the form needs to be attached to the main document.
    DataForm.style.display = "none";
    document.body.appendChild(DataForm);

    DataForm.submit();

    // But once the form is sent, it's useless to keep it.
    document.body.removeChild(DataForm);
}
//***************************************************

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
        postData({                                                         //send data through js test
            content: "add through js3"                                    //true means finished
        });
        $(this).addClass('done');
    });
});

//delete all the items in the todo list
