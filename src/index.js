import lodash from "lodash";

var elemid = 0
var ls = []

var initPos = []
var finalPos = []


var buttonclick = document.getElementById('addnotes')
buttonclick.addEventListener('click', openPrompt)


if (localStorage.getItem('taskadded') != null) {
    var getTasks = localStorage.getItem('taskadded')
    var parseTask = JSON.parse(getTasks)

    parseTask.map(item => {
        var taskName = item.taskname
        var parId = item.parentId
        console.log(taskName)
        addTodoList(taskName, parId)
    })
}
var parentId = 'todoColumn'

//getting the task in terms of a modal thingy
function openPrompt() {
    var openModal = prompt('add notes', 'notes')
    addTodoList(openModal, parentId)
}


//creating a div eelement in todo column and adding event listeners
function addTodoList(openModal, parentId) {

    var inputText = document.createElement('div')
    inputText.style.backgroundColor = "aliceblue"
    inputText.style.marginTop = "13px"
    inputText.innerHTML = openModal
    inputText.draggable = "true"
    inputText.setAttribute('id', 'draggingele' + elemid)

    document.getElementById(parentId).appendChild(inputText)
    elemid++
    let initobj = {}
    initobj['id'] = inputText.id
    initobj['parentId'] = parentId
    initobj['taskname'] = openModal

    if (openModal != null) {
        initPos.push(initobj)
    }
    console.log(initPos)
    storeInls()

    inputText.addEventListener('dragstart', (event) => {
        ondragstart(event)
    })
    inputText.addEventListener('dragend', (event) => {
        ondragend(event)
    })

}

function storeInls() {
    localStorage.setItem('taskadded', JSON.stringify(initPos))
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


    var datatransfer = event.dataTransfer.setData('text/plain', event.target.id)

}

//on dragend
function ondragend(event) {
    event.currentTarget.style.border = "none"

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

    initPos.map(item => {
        if (item.id == draggablelem.id) {
            if (item.parentId != draggablelem.parentElement.id) {
                item.parentId = draggablelem.parentElement.id
            }
        }

    })
    storeInls()
    console.log(initPos)


}





