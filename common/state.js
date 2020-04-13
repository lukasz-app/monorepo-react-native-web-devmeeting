import React from 'react'

const useToDoState = () => {
    const [todos, setState] = React.useState([]);
    const [tempTitle, setTempTitle] = React.useState("")
    const addToDo = () => {
        if (tempTitle == "") {
            alert("Title must not be empty!")
        } else {
            setState([...todos, { title: tempTitle, id: new Date().getTime() }]);
            setTempTitle("");
        }
    };
    const removeToDo = (id) => {
        setState([...todos.filter((todo) => todo.id != id)])
    };

    return { todos, addToDo, removeToDo, tempTitle, setTempTitle };
}

export default useToDoState;