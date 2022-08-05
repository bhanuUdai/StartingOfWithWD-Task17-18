// /*const btn=document.querySelector(".btn")

// btn.addEventListener('mouseout',(e)=>
// {
//     e.preventDefault();
//     //console.log(e.target.className);
//     document.querySelector('#my-form').style.background="red";
//     document.querySelector("body").classList.add("bg-dark");
//     document.querySelector(".items").children[2].innerHTML="<h1>HELLO</h1>";

// })*/

// const btn=document.querySelector('.btn');

// btn.addEventListener('mouseover',mouse);
// function mouse(e)
// {
//   e.preventDefault();
//   document.querySelector('.container').style.background='pink'
// }

// //const btn=document.querySelector('btn');

// btn.addEventListener('mouseout',mice);
// function mice(e)
// {
//   e.preventDefault();
//   document.querySelector('.items').children[1].innerHTML='<h3>hlo world</h3';
//   document.querySelector('#name').style.background='yellow';
//   document.querySelector('#email').style.background='orange';

// }

// btn.addEventListener('click',push);
// function push(e)
// {
//   e.preventDefault();
// let Name=document.querySelector('#name');
// let Mail =document.querySelector('#email');

// if(Name.value==''|| Mail.value=='')
// {
//  let label1= document.querySelector('.container').children[0].children[2].children[0];
//  let label2= document.querySelector('.container').children[0].children[3].children[0];

//  label1.textContent='Please fill it out';
//  label2.textContent='Mandatory fields';

//  setTimeout(()=>label1.remove(),3000);
//  setTimeout(()=>label2.remove(),3000);
// }
// console.log(Name.value,Mail.value);
// }


/////---------------///////

// const myForm=document.querySelector('#my-form');
// const nameInput=document.querySelector('#name');
// const emailInput=document.querySelector('#email');
// const msg=document.querySelector('.msg');
// const userList=document.querySelector('#users');

// myForm.addEventListener('submit',onSubmit);
// function onSubmit(e)
// {
//   e.preventDefault();
//   if(nameInput.value==='' || emailInput.value==='')
//   {
//     msg.classList.add('error')
//     msg.innerHTML='<h3>fill the blanks</h3>'
//     setTimeout(()=>msg.remove(),3000);
//   }
//   else
// {
//     const li=document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//     userList.appendChild(li);

//     //clear field
//     nameInput.value='';
//     emailInput.value='';
// }
// }

// --------------------------------------/////

// let ul=document.getElementsByClassName('item')
// ul.children[0].remove()
// console.log(ul)

//REVESION 

let heading=document.querySelector('header','h1');

heading.style.color='blue';

let heading1=document.querySelector('header');

let head=heading1.querySelector('h1')
head.style.color='pink'

let myform=document.querySelector('#my-form');
let myname=document.querySelector('#name');
let mymail=document.querySelector('#email');
let unordered=document.querySelector('.items')

myform.addEventListener('submit',onclick)   ///event listener works on singular selector i.e .querySelector

function onclick(e)
{
  e.preventDefault();         
if(myname.value=='' || mymail.value=='')
{
  alert('fill the blanks')
 
}
else
{
  let Li=document.createElement('li');
  Li.className='item';
  let data=document.createTextNode(`name :${myname.value} email:${mymail.value}`);
  Li.appendChild(data);
  unordered.appendChild(Li);
}

}
