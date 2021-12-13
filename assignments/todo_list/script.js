var input = document.querySelector("input");
var button = document.querySelector("button")
var todos = document.querySelector("div.todos")
let count = 0
button.addEventListener("click",function(){
    if (input.value){
        var newTodo = document.createElement("p")
        newTodo.innerText = input.value
        newTodo.setAttribute("key",count++)
        todos.appendChild(newTodo)
        newTodo.addEventListener("click",function(e){
            var key = e.target.getAttribute("key")
            document.querySelector('p[key="${key}"]').remove();
        })
        input.value = "";
    }
})