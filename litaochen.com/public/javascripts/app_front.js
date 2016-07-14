
$(".examples").mouseenter(function() {
    $(this).addClass('mouseOn');
    console.log($(this).classList);
});

$(".examples").mouseleave(function() {
    $(this).removeClass('mouseOn');
    console.log($(this).classList);
});


// scroll to on click

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



