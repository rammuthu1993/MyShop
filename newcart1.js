let memory = []
window.onload = ()=>{
  memory = JSON.parse(localStorage.getItem('txt')) || []
   count = memory.length
  document.getElementById('qty').innerHTML = count
  document.getElementById('count').innerHTML = count
  display() 
}
var info = []



function display(){
       if(memory ==""){
         document.getElementById('total').innerHTML = 0
       }
       let total = 0
    document.getElementById('cart').innerHTML = memory.map((v,i)=>{
      
        let {name,price,img,imgs} = v
        console.log(price);
        info.push(...imgs)
        console.log(info);
        total = total+price
        console.log(total);
        document.getElementById('total').innerHTML = total
        //console.log(info);
           j= -1
        
        return (`    
        <div  class="col-md-12 d-flex ">
        <div class="col-md-1" id="pic">
        <div class="  w-100  mt-1 " style = "border:3px solid blue;" >
        
        <img src=${imgs[++j]} alt="" onmouseover="fadd(${j},${i})" class="w-50 img-thumpnail">
        </div>
        <div class=" w-100 mt-1 " style = "border:3px solid blue;" >
        
        <img src=${imgs[++j]} alt="" onmouseover="fadd(${j},${i})" class="w-100 img-thumpnail">
        </div>
        <div class=" w-100 mt-1 " style = "border:3px solid blue;">
        
        <img src=${imgs[++j]} alt="" class="w-100 img-thumpnail"  onmouseover="fadd(${j},${i})">
        </div>
        <div class=" w-100 mt-1" style = "border:3px solid blue;">
        
        <img src=${imgs[++j]} alt="" class="w-100 img-thumpnail" onmouseover="fadd(${j},${i})">
        
        </div>
        </div>
        
        <div class="col-md-10 " >
        <div class = "col-md" >
        <img src=${img} class="get">

        <img src=${img} class="">
        
        </div>
        <button class="bg-warning rounded p-2 ms-3" onclick = "buy(${i})">Buy</button>
        <button class="bg-warning rounded p-2 ms-3" onclick = "del(${i})">Remove</button>
        <span>Price:${price}</span>
        </div>
        </div>
        `)
        
        }).join("")
        
}

function fadd(j,i){

   console.log(j);
  // let slide = document.getElementById('cart')
   let mpic = document.querySelectorAll('.get')
   
   mpic[i].src = `${info[j]}`
   
   
}

function buy(i){
   document.getElementById('price').innerHTML = memory.map((v,i)=>{
    let {name,price,img} = v
    
    return (`Price:${price}`)
   
   })
}



function del(i){
   memory.splice(i,1)
   localStorage.setItem('txt',JSON.stringify(memory))
   document.getElementById('qty').innerHTML = --count
   document.getElementById('count').innerHTML = count
    display()
}