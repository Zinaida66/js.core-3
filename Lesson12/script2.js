

document.querySelector('.box-li').addEventListener('mouseover', function(){
    event.target.style.backgroundColor = 'yellow'
    event.target.style.border = '4px solid green  '
    event.target.style.color = 'black'
    event.target.textContent = 'Хочеш знати який?'
    
})

document.querySelector('.box-li').addEventListener('mousedown', function(){
    event.target.style.backgroundColor = 'black'
    event.target.style.border = '4px solid  yellow'
    event.target.style.color = 'white'
    event.target.textContent = 'А я тобі не скажу'
})
document.querySelector('.box-li').addEventListener('mouseup', function(){
    event.target.style.backgroundColor = 'yellow'
    event.target.style.border = '4px solid green  '
    event.target.textContent = 'Хочеш знати який?'
    event.target.style.color = 'black'
    
})
document.querySelector('.box-li').addEventListener('mouseout', function(){
    event.target.style.backgroundColor = ' rgb(144, 24, 155)'
    event.target.style.border = '4px solid rgb(231, 141, 23)  '
    event.target.textContent = 'У мене є секрет '
    event.target.style.color = 'black'
    
})