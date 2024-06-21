// import logo from './logo.svg';
import React, {useRef} from 'react'
import './App.css';
import Weather  from './components/Weather';

function App() {

  const nameApp = useRef('Weather App - Tekko')
  document.title = nameApp.current

  return (
    <div className="app">
      <Weather />
    </div>
  );
}

export default App;
