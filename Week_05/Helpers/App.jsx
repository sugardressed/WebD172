import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

    const [count, setCount] = useState(0);

    function addOne() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={addOne}>
                Add One
            </button>
        </div>
    );
}

export default App;