

document.querySelector('.div1').addEventListener('mousedown', function () {
    this.style.backgroundImage = `url(` + prompt('write url image 1') + `)`;

})
document.querySelector('.div2').addEventListener('mousedown', function () {
    this.style.backgroundImage = `url(` + prompt('write url image 2') + `)`;

})
document.querySelector('.div3').addEventListener('mousedown', function () {
    this.style.backgroundImage = `url(` + prompt('write url image 3') + `)`;

})