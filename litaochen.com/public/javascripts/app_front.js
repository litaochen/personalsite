
$(".examples").mouseenter(function() {
    $(this).addClass('mouseOn');
    console.log($(this).classList);
});

$(".examples").mouseleave(function() {
    $(this).removeClass('mouseOn');
    console.log($(this).classList);
});



