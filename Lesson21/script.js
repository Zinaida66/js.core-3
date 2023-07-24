$(document).ready(function () {
    $('.black').animate({
        height: '100%',

    }, 60000,)
    $('.green').animate({
        height: '0%',

    }, 60000,)
    .fadeIn(0, function(){
        $('.nomer').html('1');
    })
    $('.black').animate({
        height: '0%',

    }, 60000, )
    $('.green').animate({
        height: '100%',

    }, 60000, )
    .fadeIn(0, function(){
        $('.nomer').html('0');
    })
})
