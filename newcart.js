window.onload = ()=>{
let memory = JSON.parse(localStorage.getItem('txt')) || []
document.getElementById('qty').innerHTML = memory.length
emcart = memory
// if(memory.length==""){document.getElementById('qty').innerHTML = 0}
}
let imgcart =[{name:'apple',price:3000,img:'/imgs/ss1.jpeg',imgs:['/imgs/s1.png','/imgs/s2.jpg','/imgs/s3.jpeg','/imgs/s4.webp']},                  
{name:'oppo',price:6000,img:'/imgs/ss3.jpeg',imgs:['/imgs/s2.jpg','/imgs/s2.jpg','/imgs/s3.jpeg','/imgs/s4.webp']},
{name:'redmi',price:4000,img:'/imgs/ss3.jpeg',imgs:['/imgs/s1.png','/imgs/s2.jpg','/imgs/s3.jpeg','/imgs/s4.webp']},
{name:'redmi',price:4000,img:'/imgs/ss4.jpeg',imgs:['/imgs/s1.png','/imgs/s2.jpg','/imgs/s3.jpeg','/imgs/s4.webp']}
 ]    
   count = 0
 document.getElementById('shop').innerHTML = imgcart.map((v,i)=>{

    let {name,price,img,imgs} = v
    
    return (`<div class="d-flex flex-column w-25 rounded " >
    <img src=${img} alt="">                     
    <div class="ms-5"><span>${name}</span> <span>Price: <span>${price}</span></span>
    
    <button onclick="add(${i})" class=" bg-warning p-1 rounded">Add Cart</button></div>
    </div>`)
    
    }).join("")
    

let emcart = []    
function add(i){
 // let addclass = document.getElementById('qty')
 // addclass.className = "class"
  emcart.push({...imgcart[i]})
  document.getElementById('qty').innerHTML = emcart.length
  localStorage.setItem('txt',JSON.stringify(emcart))
 // window.location.href = 'newcart1.html'
}