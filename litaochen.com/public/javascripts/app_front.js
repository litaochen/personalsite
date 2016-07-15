

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


// scroll to the anchor point on click
//*****************************************
$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
}


$('a').click(function(event) {
    event.preventDefault();
    $($(this).attr("href")).scrollView();
});
//*****************************************



