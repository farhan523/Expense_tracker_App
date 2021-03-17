let btn = document.getElementById('btn');
let detail = document.getElementById('detail');
let amount = document.getElementById('amount');
let maindiv = document.querySelector('.history-details')

let income = document.getElementById('z1');
let expense = document.getElementById('z2');

let total = document.getElementById('total')



btn.addEventListener('click',(e)=>{
   
    if(amount.value == "" && detail.value == ""){
        e.preventDefault()
        console.log("none")
    }

    else{

    let inputDetails = detail.value;
    let amountDetails = amount.value;

    amountDetails = parseInt(amountDetails)
  

    e.preventDefault();
    let element = document.createElement('article');  // create element article

    if(amountDetails<0){
        element.classList.add('red');
    }else if(amountDetails>0){
        element.classList.add('green')
    }
   

    let element2 = document.createElement('div'); //create element div
    element2.classList.add('icon');

    let element3 = document.createElement('i'); //create element icon i
    element3.classList.add('far')
    element3.classList.add('fa-window-close')
    element3.classList.add('close')
    

    let para = document.createElement('p') ;
    para.innerText = inputDetails;

    let para2 = document.createElement('p');
    let span = document.createElement('span');
    span.innerText = amountDetails;
    // console.log(amountDetails)
     para2.innerHTML = `$${span.innerText}`
     

     // appending

     element2.appendChild(element3)
     element2.appendChild(para)

     element.appendChild(element2);
     element.appendChild(para2)
     console.log(element)

     maindiv.appendChild(element)
     let removebtn = document.querySelectorAll('.close')


     

     if(amountDetails>0){
         let q = income.innerText
         q = parseInt(q)
        
         q += amountDetails
        q.innerText += q
       income.innerText = q

       
     }else if(amountDetails<0){
        let z = expense.innerText;
        z= parseInt(z);
        z += amountDetails;
        expense.innerText =  -(z)

     }

     total.innerText = income.innerText - expense.innerText
  
     removebtn.forEach((b)=>{
        b.addEventListener('click',(e)=>{
          
            let x = e.currentTarget.parentNode.parentNode.remove();
            let i = e.currentTarget.parentNode.nextElementSibling
          
             console.log(i)
    
               
    
            
        })
     })


}
})

