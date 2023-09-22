const form = document.querySelector('.forma'),
input = document.querySelector('.input'),
btn = document.querySelector('.btn'),
result = document.querySelector('.result'),
span = document.querySelector('.hidden'),
item = document.querySelector('.item');
const hours = document.querySelector('.hour')
const minutes = document.querySelector('.minute')
const secunds = document.querySelector('.secund')

const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
console.log(hour);


if(hour < 10){
    hours.textContent = '0',hour;
}else {
    hours.textContent = hour;
}
if(minute < 10){
    minutes.textContent = `0${minute}` ;
}else {
    minutes.textContent = minute;
}
if(second < 10){
    setInterval(() =>{
        secunds.textContent = `0${second}` ;
    }, 1000)
}else {
    setInterval(() =>{
        secunds.textContent = second;
    }, 1000)
    
}



form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const todos = input.value 
    // localStorage.setItem('list', JSON.stringify(todos))

    if(todos){

       localStorage.setItem('list', JSON.stringify(todos))

       const item = document.createElement('div');
       item.classList.add('item')
       
       const text = document.createElement('p')
       text.classList.add('item-text');
       item.appendChild(text);
       text.textContent = input.value;

       const itemChild = document.createElement('div')
       itemChild.classList.add('item-child')
       item.appendChild(itemChild)

       const editBtn = document.createElement('button')
       editBtn.classList.add('edit-btn')
       editBtn.classList.add('btn')
       itemChild.appendChild(editBtn)
       editBtn.textContent = 'Edit'

       const deleteBtn = document.createElement('button')
       deleteBtn.classList.add('delete-btn')
       itemChild.appendChild(deleteBtn)
       deleteBtn.classList.add('btn')
       deleteBtn.textContent = 'Delete'

       result.appendChild(item)

       form.reset()
    }else{
        span.classList.remove('hidden');
        setTimeout(()=>{
            span.classList.add('hidden');
        }, 2500)
        
    }
    
    
})


