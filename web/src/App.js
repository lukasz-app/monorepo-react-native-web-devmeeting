import React from 'react';
import './App.css';
import { title, subtitle } from 'common/app.json';
import commonStyles from 'common/styles';

function App() {
  return (
    <div className="App" style={{ flex: 1, backgroundColor: commonStyles.color.background }}  >
      <p style={{ color: commonStyles.color.title, fontSize: commonStyles.textSize.title }} >
        {title}
      </p>
      <p style={{ color: commonStyles.color.subtitle, fontSize: commonStyles.textSize.subtitle }} >
        {subtitle}
      </p>
    </div>
  );
}
export default App;
