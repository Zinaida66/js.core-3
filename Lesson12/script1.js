// Завдання1

let count = 0;
let colors = ['red','yellow',' green'];
document.querySelector('.box').addEventListener('mouseover', function(){
   
    for(i=0; i<colors.length; i++){
        if(count==i){
            this.style.backgroundColor = colors[i];
        }
    }
    count++;
}

)
document.querySelector('.box').addEventListener('mouseout', function(){
    event.target.style.backgroundColor = 'rgb(136, 19, 146)';
    
})


