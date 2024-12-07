function addtask() {
    const newtask = document.createElement('li')
    const taskList = document.getElementById('taskList')
    newtask.textContent = document.getElementById('inputTask').value
    taskList.appendChild(newtask)
    document.getElementById('inputTask').value = ""
    deletetask(newtask)
}

function deletetask(newtask) {
    const deletebtn = document.createElement('button')
    deletebtn.textContent = "Delete"
    newtask.appendChild(deletebtn)
    deletebtn.onclick = function () {
        newtask.remove()
    }
}
