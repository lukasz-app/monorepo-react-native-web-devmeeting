import React from 'react';
import './App.css';
import { title, subtitle } from 'common/app.json';

function App() {
  return (
    <div className="App">
      <p>
        {title}
      </p>
      <p>
        {subtitle}
      </p>
    </div>
  );
}
export default App;
