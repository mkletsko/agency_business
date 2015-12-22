$(document).ready(function() {
    $('.toggle-menu').click(function() {
        $(this).toggleClass('on');
        $('#menu').slideToggle();
    });
});
