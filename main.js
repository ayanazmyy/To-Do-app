body = document.querySelector('body')
taskInput = document.getElementById('taskInput')
addBtn = document.getElementById('addBtn')
noTasks = document.getElementById('noTasks')
allTasks = document.getElementById('allTasks')
invalidData = document.getElementById('invalidData')
invalidData2 = document.getElementById('invalidData2')
invalidData3 = document.getElementById('invalidData3')
closeBtn = document.getElementById('closeBtn')
closeBtn2 = document.getElementById('closeBtn2')
closeBtn3 = document.getElementById('closeBtn3')
modal = document.getElementById('modal')
modalBtn = document.getElementById('modalBtn')
switchBtn = document.getElementById('switchBtn')

console.log(switchBtn);

switchBtn.onclick = function() {
    if(body.classList[0] == 'bg-dark') {
        body.classList.remove('bg-dark')
        this.classList.add('btn-dark')
        this.classList.remove('btn-light')
        this.innerText = "Dark mode"
    }
    else {
        body.classList.add('bg-dark')
        this.classList.add('btn-light')
        this.classList.remove('btn-dark')
        this.innerText = "light mode"
    }
}


let showModalFunction = () => {
    modal.classList.toggle('block')
}
modalBtn.addEventListener('click' , showModalFunction)


let addTask = ()=> {
    taskData = taskInput.value
    if (taskInput.value.length == 0){
        invalidData.classList.remove('none')
    }

    else if(taskInput.value.length < 2) {
        invalidData2.classList.remove('none')
    }

    else if(taskInput.value.length > 20) {
        invalidData3.classList.remove('none')
    }
    
    else {
        noTasks.classList.add('none')
        taskData = taskInput.value
        allTasks.innerHTML += `<div class="task alert alert-info"> ${taskData} 
        <i class="delete far fa-trash-alt float-right" style="font-size: 20px;"></i>
        </div>`
        taskInput.value = ""
        allTasks.addEventListener('click' , function(e) {
            if(e.target.classList.contains('task')) {
                e.target.classList.toggle('checked')
            }
            
        })
        showModalFunction()
    }
}

addBtn.addEventListener('click' , addTask)


let closeBtnFunction = ()=> {
    invalidData.classList.add('none')
}
closeBtn.addEventListener('click' , closeBtnFunction)


let closeBtn2Function = ()=> {
    invalidData2.classList.add('none')
}
closeBtn2.addEventListener('click' , closeBtn2Function)

let closeBtn3Function = ()=> {
    invalidData3.classList.add('none')
}
closeBtn3.addEventListener('click' , closeBtn3Function)

let noTasksFunction = () => {
    if(allTasks.childElementCount == 0) {
        noTasks.classList.remove('none')
    }
}
document.addEventListener('click' , function(e) {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
        noTasksFunction()
    }
})