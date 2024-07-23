const chapter = document.getElementById('chapter')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('list')

const addChapter = () =>{
    const text = chapter.value;
    if(text.length==0) return;
    const newChapter = document.createElement('li')
    newChapter.className = 'list-group-item  d-flex justify-content-between align-items-center'
   newChapter.innerHTML = `<div class="flex-grow-1">${text}</div>
      <button class="btn btn-primary mx-2" onclick = editChapter(this)>Edit</button>
      <button class="btn btn-danger" onclick = removeChapter(this)>X</button>
   `;
    list.appendChild(newChapter)
    chapter.value = ""
}

const removeChapter = (currElement) =>{
    
    currElement.parentElement.remove()
}


const editChapter = (currElement) =>{
    const firstCh = currElement.parentElement.firstChild;
    if(currElement.innerText =="Done"){
        const updatedChapter = document.createElement('div')
        updatedChapter.classList.add('flex-grow-1')
        updatedChapter.innerText = firstCh.value
       currElement.parentElement.replaceChild(updatedChapter,firstCh) 
       currElement.innerText = "Edit"
    }else{
        const newChild = document.createElement('input')
        newChild.type="text"
        newChild.classList.add('form-control')
        newChild.value = firstCh.innerText;
        currElement.parentElement.replaceChild(newChild,firstCh)
        currElement.innerText = "Done"
    }
  
  
}

addBtn.addEventListener('click',addChapter)


