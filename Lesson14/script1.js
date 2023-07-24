

 document.querySelector('button').addEventListener('click', function(){
   let a = document.querySelector('.login').value;
   document.querySelector('.login1').value = a;
   document.getElementById("rest").reset(); 
 })


let elem = document.getElementsByName("holder")[0];
elem.addEventListener("focus", function(){
})
elem.addEventListener("blur", function(){
  if(event.target.value !=''){
    elem.setAttribute("placeholder", this.value);
    document.getElementById("my").reset();  
    
  }
 
})
 