import React from 'react'


let persistedState = [];

const useToDoState = () => {
    const [todos, setState] = React.useState(persistedState);
    const [tempTitle, setTempTitle] = React.useState("")
    const addToDo = () => {
        if (tempTitle == "") {
            alert("Title must not be empty!")
        } else {
            let newState =
                [...todos, { title: tempTitle, id: new Date().getTime() }];
            setState(newState);
            persistedState = newState;
            setTempTitle("");
        }
    };
    const removeToDo = (id) => {
        setState([...todos.filter((todo) => todo.id != id)])
    };

    return { todos, addToDo, removeToDo, tempTitle, setTempTitle };
}

export default useToDoState;