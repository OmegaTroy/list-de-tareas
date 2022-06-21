document.addEventListener('DOMContentLoaded', () =>{
let title = document.getElementById('titulo');
let table = document.getElementById('tabla');
let id = 1;



const removeElement = (id) => {
    document.getElementById(id).remove();
    console.log(id)
}

    title.addEventListener('keypress',(e)=>{
        if (e.key === "Enter"){
            e.preventDefault();
            if(title.value == ''){
                alert('escribe una tarea')
            }else{
                const row = table.insertRow();
                row.setAttribute('id',id++);
                row.classList.add('list__tr');
                row.innerHTML = `
                <td></td>
                <td></td>
                `;
                const input = document.createElement('input');
                input.classList.add('list__item');
                row.children[0].appendChild(input);
                input.setAttribute('value',`${title.value}`);
                input.setAttribute('maxlength', 20)
                input.setAttribute('disabled',true);
                input.addEventListener('keypress',(e) =>{
                    if(e.key === "Enter"){
                        input.setAttribute('disabled',true);
                    }
                } )
                
                row.children[0].setAttribute('id',id)
                row.addEventListener('dblclick',()=>{
                    row.getAttribute('id');
                    input.classList.add('list__complete');
                });
                
                const editBtn = document.createElement('button');
                editBtn.classList.add('editBtn');
                editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
                row.children[1].appendChild(editBtn);
                editBtn.addEventListener('click',()=>{
                    input.removeAttribute('disabled');
                    input.focus();
                });
                
                const removeBtn = document.createElement('button');
                removeBtn.classList.add('btn');
                removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
                row.children[1].appendChild(removeBtn);
                removeBtn.addEventListener('click',()=>{
                    removeElement(row.getAttribute('id'))
                });
                document.getElementById("titulo").value = "";
            }
        }
    });
});

