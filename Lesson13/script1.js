

"use strict";

    const task = document.querySelector(".task_1");
    const main = document.querySelectorAll("p");
    const container = document.querySelector(".container");
    const boxs = document.querySelectorAll(".box");
    const colors = [
      " rgb(43, 180, 146)",
      " rgb(45, 43, 180)",
      " rgb(211, 20, 185)",
      "rgb(172, 170, 171)",
      " rgb(192, 32, 30)",
      " rgb(102, 52, 90) ",
      " rgb(152, 32, 80)",
      "rgb(236, 92, 35)",
      "rgb(33, 199, 177) ",
    ];
    const urls = [
      "https://zastavok.net/main/priroda/163639101685.jpg",
      "https://zastavok.net/main/priroda/163639519111.jpg",
      "https://zastavok.net/main/priroda/163638980898.jpg",
      "https://zastavok.net/main/priroda/163639453162.jpg",
      "https://zastavok.net/main/priroda/159397740544.jpg",
      "https://zastavok.net/main/priroda/159422334595.jpg",
      "https://zastavok.net/main/priroda/159422286157.jpg",
      "https://zastavok.net/main/priroda/159397770699.jpg",
      "https://zastavok.net/main/priroda/1473870640.jpg",
    ];
    for (let i = 0; i < main.length; i++) {
      main[i].addEventListener("click", function () {
        container.classList.remove("hidden");
  
        if (i === 0) {
          main[i].classList.add("effect");
          main[1].classList.remove("effect");
          for (let j = 0; j < boxs.length; j++) {
            if (boxs[j].style.backgroundImage) {
               boxs[j].style.backgroundImage = ``;
              
            } else {
              boxs[j].style.backgroundColor = colors[j];
            }
          }
          for (let y = 0; y < boxs.length; y++) {
            boxs[y].addEventListener("click", function (event) {
              if (task.style.backgroundImage) {
                task.removeAttribute('style')
              } else {
                task.style.backgroundColor = event.target.style.backgroundColor;
              }
            });
          }
        } else if (i === 1) {
          main[i].classList.add("effect");
          main[0].classList.remove("effect");
          for (let j = 0; j < boxs.length; j++) {
            boxs[j].style.backgroundImage = `url(${urls[j]})`;
          }
          for (let y = 0; y < boxs.length; y++) {
            boxs[y].addEventListener("click", function (event) {
              task.style.backgroundImage = event.target.style.backgroundImage;
            });
          }
        }
      });
    }