const getS = (selector) => document.querySelector(selector);
const getId = (selector) => document.getElementById(selector);
const formSize = document.forms['form-size'];
const formFamily = document.forms['form-family'];
const formStyle = document.forms["form-style"];
const colors1 = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
//start funtion edit
getS('.btn-edit').addEventListener('click',()=>{
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
});
//and;


//start funtion save
getS('.btn-save').addEventListener('click',() =>{
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value; 
})
//and;

//start style
getS('.btn-style').addEventListener('click',() =>{
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})
//and;

//start function formSize
formSize.addEventListener("click", () =>  {
  getS('.top-block').style.fontSize = event.target.value;
});
//and;

//start function fontFamily
formFamily.addEventListener('click', ()=>{
  getS('.top-block').style.fontFamily = event.target.value;
})
//and;

//start function color and backgroundColor
getS('.btn-text-color').addEventListener('click',() =>{
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors1[i];
        getS('.colors').children[i].onclick = function(){
            console.log('textcolor')
            getS('.top-block').style.color = this.style.backgroundColor;
        }
    } 
});

getS('.btn-bg-color').addEventListener('click',() =>{
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors1[i];
        getS('.colors').children[i].onclick = function(){
            console.log('backgroundColor')
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
           
        }
    } 
    
});
//and;

//start bold
formStyle.bold.addEventListener('click', ()=>{
  // console.log(event.target.checked);
  if(event.target.checked){
      getS('.top-block').classList.add('bold');
  }
  else{
      getS('.top-block').classList.remove('bold');
  }
});

/*  function cursive style */
formStyle.cursive.addEventListener("click", () => {
  //console.log(event.target.checked);
  if (event.target.checked) {
    getS(".top-block").classList.add("cursive");
  } else {
    getS(".top-block").classList.remove("cursive");
  }
});

// start second
getS('.btn-add').addEventListener('click',()=>{
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show')

});
//and;


//start function table
const table = document.forms['form-table']

getS(".table").addEventListener("click", () => {
    getS(".create-table").classList.add("show");
    getS(".create-list").classList.remove("show");
  });
  
  getS(".btn-table").addEventListener("click", () => {
    const countTr = table.tr.value;
    const countTd = table.td.value;
    const widthTd = table.width.value;
    const heightTd = table.height.value;
    const borderWidth = table.border.value;
    const borderType = table.borderType.value;
    const borderColor = table.borderColor.value;
    getS( ".edit-area").value += `<table style="border-spacing: 0; border-collapse: collapse">`;
    for (let i = 0; i < countTr; i++) {
      getS(".edit-area").value += `<tr>`;
      for (let j = 0; j < countTd; j++) {
        getS( ".edit-area" ).value += `<td style="width: ${widthTd}px;
         height: ${heightTd}px; border: ${borderWidth}px
          ${borderType} ${borderColor}">TD</td>`;
      }
      getS(".edit-area").value += `</tr>`;
    }
    getS(".edit-area").value += `</table>`;
    table.reset();
    getS(".first").classList.add("show");
    getS(".second").classList.remove("show");
  });
//and;

//start function list
const list = document.forms['form-list'];
getS(".list").addEventListener("click", () => {
    getS(".create-list").classList.add("show");
    getS(".create-table").classList.remove("show");
  });
  getS(".btn-create-list").addEventListener("click", () => {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
      getS(".edit-area").value += `<li>item ${i + 1}</li>`;
    }
    getS(".edit-area").value += "</ul>";
  
    getS(".first").classList.add("show");
    getS(".second").classList.remove("show");
  });

getS('.list').addEventListener('click', ()=>{
    getS('.create-list').classList.add('show')

});
//and