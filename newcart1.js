let memory = []
window.onload = ()=>{
  memory = JSON.parse(localStorage.getItem('txt')) || []
   count = memory.length
  document.getElementById('qty').innerHTML = count
  document.getElementById('count').innerHTML = count
  display() 
}
var info = []

let k = -1

function display(){
       if(memory ==""){
         document.getElementById('total').innerHTML = 0
       }
       let total = 0
    document.getElementById('cart').innerHTML = memory.map((v,i)=>{
      let j= -1
      
        let {name,price,img,imgs} = v
        console.log(price);
        info.push([...imgs])
        console.log(info);
        total = total+price
        console.log(total);
        document.getElementById('total').innerHTML = total
        console.log(info);
           
        
        return (`    
        <div  class="col-md-12 d-flex ">
        <div class="col-md-1" id="pic">
        <div class="  w-100  mt-1 " style = "border:3px solid blue;" >
        
        <img src=${info[++k][++j]} alt="" onmouseover="fadd(${j},${i},${k})" class="w-100 img-thumpnail">
        </div>
        <div class=" w-100 mt-1 " style = "border:3px solid blue;" >
        
        <img src=${info[k][++j]} alt="" onmouseover="fadd(${j},${i},${k})" class="w-100 img-thumpnail">
        </div>
        <div class=" w-100 mt-1 " style = "border:3px solid blue;">
        
        <img src=${info[k][++j]} alt="" class="w-100 img-thumpnail"  onmouseover="fadd(${j},${i},${k})">
        </div>
        <div class=" w-100 mt-1" style = "border:3px solid blue;">
        
        <img src=${info[k][++j]} alt="" class="w-100 img-thumpnail" onmouseover="fadd(${j},${i},${k})">
        
        </div>
        </div>
        
        <div class="col-md-10 " >
        <div class = "col-md" >
        <img src=${img} class="get">

        <img src=${img} class="">
     <span><label for="">Blue</label> <input type="radio" value = "Blue" name = "color"> 
     <label for="">Black</label> <input type="radio" value = "Black" name = "color"> 
     <label for="">Gray</label> <input type="radio" value = "Gray" name = "color"> </span>
        </div>
        <button class="bg-warning rounded p-2 ms-3" onclick = "buy(${i})">Buy</button>
        <button class="bg-warning rounded p-2 ms-3" onclick = "del(${i})">Remove</button>
        <span>Price:${price}</span>
        </div>
        </div>
        `)
        
        }).join("")
        
}

function fadd(j,i,k){
  console.log(k);
   console.log(j);
  // let slide = document.getElementById('cart')
   let mpic = document.querySelectorAll('.get')
   
   mpic[i].src = `${info[k][j]}`
   
}

function buy(i){
 
  let img = function(){
   return (`<img src="${memory[i].img}"> `)
  }

  //let list = document.createElement('p')
 // list.id = "pic"
 // list.append(img())
 let ul = document.getElementById('list')
 ul.innerHTML = img()
  }
  //'name:&nbsp;',memory[i].name,"nbsp;",'Price:&nbsp',memory[i].price


function del(i){
   memory.splice(i,1)
   localStorage.setItem('txt',JSON.stringify(memory))
   document.getElementById('qty').innerHTML = --count
   document.getElementById('count').innerHTML = count
    k = -1
    display()
}