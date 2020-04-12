import lodash from "lodash";


var addTodo = []
var inPrgogress = []
var completed = []




var source = document.getElementById('source')
source.addEventListener('dragstart', dragStart(event))


function dragStart(ev) {
    console.log("dragStart");
    // Change the source element's background color to signify drag has started
    ev.currentTarget.style.border = "dashed";
    // Set the drag's format and data. Use the event target's id for the data 
    ev.dataTransfer.setData("text/plain", ev.target.id);

}

var target = document.getElementById('inProgresscolumn')
target.addEventListener('drop', dropHandler(event))
target.addEventListener('dragover', dragoverHandler(event))

// var buttonclick = document.getElementById('addnotes')
// buttonclick.addEventListener('click', addTodoList)



// function addTodoList() {


//     var inputText = document.createElement('input')
//     inputText.type = "text"
//     inputText.placeholder = "What Today!!"
//     inputText.draggable = "true"


//     document.getElementById('taskName').appendChild(inputText)
//     inputText.addEventListener('dragstart', (event) => {

//         ondragstart(event)

//     })
// }


// function ondragstart(event) {

//     var taskName = event.dataTransfer.setData('text', event.target.id)
//     console.log(taskName)


// }


// var dropHere = document.getElementById('inProgresscolumn')
// dropHere.addEventListener('drop', (event) => {
//     event.preventDefault();
//     var data = event.dataTransfer.getData('text')

//     event.target.appendChild(dropHere)

// })
// dropHere.addEventListener('dragover', (event) => {
//     event.preventDefault()
// })




