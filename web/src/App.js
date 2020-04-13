import React from 'react';
import { title, subtitle } from 'common/app.json';
import commonStyles from 'common/styles';
import useToDoState from 'common/state';

function App() {
  const { todos, addToDo, removeToDo, setTempTitle, tempTitle } = useToDoState();

  return (
    <div style={commonStyles.mainView}  >
      <p style={commonStyles.title} >
        {title}
      </p>
      <p style={commonStyles.subtitle} >
        {subtitle}
      </p>
      <div style={commonStyles.inputContainer} >
        <input value={tempTitle} onChange={(event) => { setTempTitle(event.target.value) }} />
        <div onClick={() => { addToDo(); }} style={commonStyles.addButton} >
          DODAJ
       </div>
      </div>
      {todos.map(t =>
        <div style={commonStyles.todo} >
          <p>
            Title: {t.title}
          </p>
          <div style={commonStyles.removeButton} onClick={() => { removeToDo(t.id) }} >
            USUŃ
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
