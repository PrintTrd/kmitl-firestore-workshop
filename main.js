document.addEventListener("DOMContentLoaded", () => {
    let firestore = firebase.firestore()

    initialize()
    addTodo((event) => {
        console.log(event)
    })
})