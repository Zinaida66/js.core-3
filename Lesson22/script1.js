
  // Завдання :
  // Необхідно реалізувати наступний функціонал як на відео AnimateGallery, а саме:
  // — потрібно при кліку на елемент щоб він анімовано летів до центру екрану збільшуючи свій розмір
  // — при ще одному кліку він повертався на свою позицію
  // — використовуйте jQuery easing для плавності анімації

  let position, color, chooseBox;

  $(".box").on("click", function () {
    position = $(this).position();
    color = $(this).css("background-color");
    chooseBox = $(this);
    $(".modal-gallery").css({
      backgroundColor: "rgba(46, 44, 44, 0.623)",
      zIndex: 3,
    });
    $(".modal").css({
      display: "block",
      backgroundColor: color,
      left: position.left,
      top: position.top,
    });
    $(this).css("background-color", "white");
    $(".modal").animate(
      {
        width: "400px",
        height: "400px",
        left: (window.innerWidth - 400) / 2,
        top: (window.innerHeight - 400) / 2,
      },
      2000,
      "easeOutQuart"
    );
  });
  $(".modal").on("click", function () {
    $(".modal").animate(
      {
        width: "150px",
        height: "150px",
        left: position.left,
        top: position.top,
      },
      2000,
      "easeOutQuart",
      function () {
        $(".modal").css("display", "none");
        $(".modal-gallery").css({
          backgroundColor: "rgba(255,255,255)",
          zIndex: -3,
        });
        chooseBox.css("background-color", color);
      }
    );
  });


    
    
    