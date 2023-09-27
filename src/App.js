import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

    const [color, setColor] = useState("#282c34")
    const [tcolor, settColor] = useState("#61dafb")
    
    const onClickHnadler = () => {
      setColor("red")
      settColor("yellow")
    }
    const onClickHnadler2 = () => {
      setColor("green")
      settColor("white")
    }
    const onClickHnadler3 = () => {
      setColor("yellow")
      settColor("green")
    }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>
        <img src={logo} className="App-logo" alt="logo" />

        
        <span style={{color: tcolor}} >Change your theme color</span>
        
        <p>
          
          <button onClick={onClickHnadler} style={{color: tcolor}}>Red</button>
          <button onClick={onClickHnadler2} style={{color: tcolor}}>Green</button>
          <button onClick={onClickHnadler3} style={{color: tcolor}}>Yellow</button>
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: tcolor}}
        >
          This Application Developed By Wasy
        </a>
      </header>
    </div>
  );
}

export default App;
