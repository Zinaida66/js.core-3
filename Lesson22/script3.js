
let r1, g1, b1;
setInterval(function () {
  $(".colo").each(function (ind, elem) {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    r1 = Math.round(Math.random() * 255);
    g1 = Math.round(Math.random() * 255);
    b1 = Math.round(Math.random() * 255);
    w = 20 + Math.round(Math.random() * 100);
    h = 20 + Math.round(Math.random() * 100);
    t = Math.round(Math.random() * 500);
    l = Math.round(Math.random() * 1300);
    let color = `rgb(${r}, ${g}, ${b})`;
    let shadow = `rgba(${r}, ${g}, ${b}, 0.467 )`;
    $(this).css("background", color);
    $(this).css("border-color", `rgb(${r1}, ${g1}, ${b1})`);
    $(this).css("box-shadow", `0 0 28px 11px ${shadow}`);
    $(this).animate(
      {
        width: `${w}px`,
        height: `${h}px`,
        top: `${t}px`,
        left: `${l}px`,
      },
      1000,
      "easeInOutSine"
    );
  });
}, 1000);
$(window).trigger("setInterval");
$(window).trigger("each");
    
    

