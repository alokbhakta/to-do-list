const item =document.querySelector("#item")
const todobox = document.querySelector("#to-do-box")


let todos = localStorage.getItem('todos')

if(todos != null) {
    todos = JSON.parse(todos)
} else {
    todos = []
}

//const removetodo=() =>{
  //  todos.re
//}

// let todos = ['todo1','todo2','todo3']
const addtodo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
                    <span>${item}</span>
                    <i class="fa-solid fa-x"></i>
    
    `;
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")

        }

    )

    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            const itemToRemove = this.parentElement.children[0].innerText
            todos = todos.filter(item=> item != itemToRemove)
            localStorage.setItem('todos',JSON.stringify(todos))
            listitem.remove()
        }
    )

 
 
    todobox.appendChild(listitem)
}

/*item.querySelector("i").addEventListener(
    "click",
    function(){
        todos = JSON.parse(todos)
        const removeitem=(this.children[0].innerText)
        todos.filter(item => item !== removeitem);
        
    }
)*/

function renderTodo() {
    todos.forEach((item)=> {
        addtodo(item)
    })
}



item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter"){
        todos.push(this.value)
        localStorage.setItem('todos',JSON.stringify(todos))
        addtodo(this.value)
        this.value = ""
        }
    }
)

renderTodo()


