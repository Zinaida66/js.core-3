let l = document.getElementsByTagName("li");
for (i = 0; i<l.length; i++)
l[i].addEventListener("click", function(event){
    event.target.style.color = event.target.textContent;
})