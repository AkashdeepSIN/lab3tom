

$(function () {
    $('.slider img:gt(0)').hide();
    setInterval(function () {
            $('.slider :first-child').fadeOut(400)
                .next('img').fadeIn(100)
                .end().appendTo('.slider');
        },
        2000);
});