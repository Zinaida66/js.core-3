"use strict";
$(function () {
    let r,g,b,h,w,l,t;
        $('.colo').click(function(){
            r = Math.round(Math.random()*255);
            g = Math.round(Math.random()*255);
            b = Math.round(Math.random()*255);
            h = Math.round(Math.random()*200);
            w = Math.round(Math.random()*200);
            l = Math.round(Math.random()*1300);
            t = Math.round(Math.random()*400);
            $('.colo').animate({
                height: `${h}px`,
                width: `${w}px`,
            },
            1000,
            "easeOutBack")
             $('.colo').css('background', `rgb(${r}, ${g}, ${b})`);
             $('.colo').css('margin-left',` ${l}px`);
             $('.colo').css('margin-top',` ${t}px`);
        });
      
})
