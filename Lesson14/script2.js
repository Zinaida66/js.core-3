"use strict";
const getS = (selector) => document.querySelector(selector);
let form = document.forms.singForm;
let firstRegExp = /^\w{4,20}$/;
let lastRegExp = /^\w{4,20}$/;
let emailRegExp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
let firstInput;
let lastInput;
let emailInput;
let first;
let last;
let email;
let posit;
getS(".first-name").addEventListener("input", () => {
    firstInput = firstRegExp.test(getS(".first-name").value);
    getS(".first-name").classList.remove("hidden");
   
});
getS(".last-name").addEventListener("input", () => {
      lastInput = lastRegExp.test(getS(".last-name").value);
      getS(".last-name").classList.remove("hidden");
    
      
    });
    
getS(".email-address").addEventListener("input", () => {
    emailInput = emailRegExp.test(getS(".email-address").value);
    getS(".email-address").classList.remove("hidden");

}); 

getS(".checkbox-input").addEventListener("click", () => {
  
    if (firstInput && lastInput && emailInput) {
        getS(".btn-first").disabled = false;
        getS(".btn-first").style.backgroundColor = "cornflowerblue";

    } else {
        getS(".btn-first").disabled = true;
        getS(".btn-first").style.backgroundColor = "firebrick";

    }
});

getS(".btn-first").addEventListener("click", () => {
    first = document.querySelector('.first-name').value;
    document.getElementById('firstes').textContent = first;
    last  = document.querySelector('.last-name').value;
    document.getElementById('lastes').textContent = last;
    email  = document.querySelector('.email-address').value;
    document.getElementById('emails').textContent = email;
 
    getS(".container").classList.add("hidden");
        getS(".second-block").classList.remove("hidden");
        
    });
/*reset form*/
getS(".btn-second").addEventListener("click", () => {
    form.submit();
    document.getElementById("resetd").reset();
});


