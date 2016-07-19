

// magnify the element when mouse on. This can also be implemented by css using :hover {}
//*****************************************
// $(".examples").mouseenter(function() {
//     $(this).addClass('mouseOn');
// });
//
// $(".examples").mouseleave(function() {
//     $(this).removeClass('mouseOn');
// });

//*****************************************


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



