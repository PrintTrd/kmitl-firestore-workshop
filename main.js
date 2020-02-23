document.addEventListener("DOMContentLoaded", () => {
    let firestore = firebase.firestore()

    initialize()
    addTodo(() => {
    })
})
