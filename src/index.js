import lodash from "lodash";


var elemid = 0
var buttonclick = document.getElementById('addnotes')
buttonclick.addEventListener('click', openPrompt)

//getting the task in terms of a modal thingy
function openPrompt() {
    var openModal = prompt('add notes', 'notes')
    addTodoList(openModal)
}


//creating a div eelement in todo column and adding event listeners
function addTodoList(openModal) {

    var inputText = document.createElement('div')
    inputText.style.backgroundColor = "aliceblue"
    inputText.style.marginTop = "13px"
    inputText.innerHTML = openModal
    inputText.draggable = "true"
    inputText.setAttribute('id', 'draggingele' + elemid)
    document.getElementById('todoColumn').appendChild(inputText)
    elemid++
    inputText.addEventListener('dragstart', (event) => {
        ondragstart(event)
    })
    inputText.addEventListener('dragend', (event) => {
        ondragend(event)
    })
}

//in proress column handling events
var dropHereIpc = document.getElementById('inProgresscolumn')
dropHereIpc.addEventListener('dragover', (event) => {
    ondragover(event)

})

dropHereIpc.addEventListener('drop', (event) => {
    ondrop(event)
})

// on complete handling events
var dropInComplete = document.getElementById('completedcolumn')

dropInComplete.addEventListener('dragover', (event) => {
    ondragover(event)
})
dropInComplete.addEventListener('drop', (event) => {
    ondrop(event)
})



//functions that handle drag and drop operations
//on drag start
function ondragstart(event) {
    var x = event.currentTarget
    x.style.border = "dashed"
    console.log(event.dataTransfer)

    var datatransfer = event.dataTransfer.setData('text/plain', event.target.id)
    var addIntoArr = event.dataTransfer.types.push(datatransfer)
    console.log(addIntoArr)
}

//on dragend
function ondragend(event) {
    event.currentTarget.style.border = "none"
    console.log('heelo')
}

//on dragover
function ondragover(event) {
    event.preventDefault()
}

//ondrop
function ondrop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text')
    const draggablelem = document.getElementById(id)
    const dropzone = event.currentTarget
    event.currentTarget.style.border = "none"
    dropzone.appendChild(draggablelem)
}



