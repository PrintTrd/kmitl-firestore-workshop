const id = (id) => document.getElementById(id),
    initialize = () => {
        id("todo-list").removeChild(id("initialize"))
        id("todo-form").addEventListener("submit", event => event.preventDefault())
    },
    addTodo = (callback) => id("todo-form").addEventListener("submit", (event) => callback(event))