import lodash from "lodash";


var addTodo = []
var inPrgogress = []
var completed = []




// var source = document.getElementById('source')
// source.addEventListener('dragstart', dragStart(event))



// function dragStart(ev) {
//     console.log("dragStart");
//     // Change the source element's background color to signify drag has started
//     ev.currentTarget.style.border = "dashed";
//     // Set the drag's format and data. Use the event target's id for the data 
//     ev.dataTransfer.setData("text/plain", ev.target.id);

// }

// var target = document.getElementById('inProgresscolumn')
// target.addEventListener('drop', dropHandler(event))
// target.addEventListener('dragover', dragoverHandler(event))


// function dropHandler(ev) {
//     console.log("Drop");
//     ev.preventDefault();
//     // Get the data, which is the id of the drop target
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     // Clear the drag data cache (for all formats/types)
//     ev.dataTransfer.clearData();
// }

// function dragoverHandler(ev) {
//     console.log("dragOver");
//     ev.preventDefault();
// }



var buttonclick = document.getElementById('addnotes')
buttonclick.addEventListener('click', openPrompt)


function openPrompt() {
    var openModal = prompt('add notes', 'notes')
    if (openModal == '' || openModal == null) {
        openPrompt()
    }
    addTodoList(openModal)
}




function addTodoList(openModal) {
    var inputText = document.createElement('div')
    inputText.style.backgroundColor = "aliceblue"
    inputText.innerHTML = openModal
    inputText.draggable = "true"
    inputText.setAttribute('id', 'draggingele')
    document.getElementById('todoColumn').appendChild(inputText)
    inputText.addEventListener('dragstart', (event) => {
        ondragstart(event)

    })
}


function ondragstart(event) {
    var x = event.currentTarget
    x.style.border = "dashed"
    console.log(event.dataTransfer)

    var datatransfer = event.dataTransfer.setData('text/plain', event.target.id)
    event.dataTransfer.dropEffect = "move"

}


var dropHere = document.getElementById('inProgresscolumn')
dropHere.addEventListener('dragover', (event) => {
    event.preventDefault()
})


dropHere.addEventListener('drop', (event) => {
    event.preventDefault();

    const id = event.dataTransfer.getData('text')

    const draggablelem = document.getElementById(id)

    const dropzone = event.currentTarget
    dropzone.appendChild(draggablelem)
})





