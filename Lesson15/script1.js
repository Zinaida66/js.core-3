
let stril1 = document.querySelector('.down1')
 window.addEventListener('scroll', function(event){
    if(window.screenY<=200){
        console.log(window.scrollY);
    stril1.style.fontSize = `${30+window.scrollY/12}px`

    }
 })
 let sim = document.querySelector('.sim')
 window.addEventListener('scroll', function(event){
     if(window.scrollY<=400){
         console.log(window.scrollY)
          sim.style.left=  `${window.scrollY/4}px`
      }
 })

let hit = document.querySelector('.red')
window.addEventListener('scroll', function(event){
    if(window.scrollY<=800){
        console.log(window.scrollY)
         hit.style.width=  `${100+window.scrollY/1}px`
     }
})

let img  = document.querySelector('.image')
window.addEventListener('scroll', myScrollEffect)
function myScrollEffect(){
   
    if(window.scrollY<=800){
        console.log(window.scrollY)
         img.style.right=  `${0+window.scrollY/4}px`
     }
 else{
   
 }
}

let stril2 = document.querySelector('.down2')
 window.addEventListener('scroll', function(event){
    if(window.screenY<=100){
      
    stril2.style.fontSize = `${20+window.scrollY/20}px`
    }
 })

 
 document.getElementById('oncluk2').addEventListener('click', ()=> {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

document.getElementById('oncluk1').addEventListener('click', ()=> {
    document.getElementById('boxs').scrollIntoView({behavior: 'smooth'})
    window.removeEventListener('scroll', myScrollEffect)
})