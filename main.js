const form = document.querySelector('.forma'),
input = document.querySelector('.input'),
btn = document.querySelector('.btn'),
result = document.querySelector('.result'),
span = document.querySelector('.hidden')
item = document.querySelector('.item');



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


