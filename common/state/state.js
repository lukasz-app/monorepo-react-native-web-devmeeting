import React from 'react'


let persistedState = [];

const useToDoState = () => {
    const [todos, setState] = React.useState(persistedState);
    const [tempTitle, setTempTitle] = React.useState("")
    const [modalVisible, setModalVisible] = React.useState(false)
    const addToDo = () => {
        if (tempTitle == "") {
            setModalVisible(true)
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

    return { todos, addToDo, removeToDo, tempTitle, setTempTitle, modalVisible, setModalVisible };
}

export default useToDoState;