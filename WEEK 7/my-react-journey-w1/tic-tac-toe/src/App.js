import logo from './logo.svg';
import './App.css';

//Component
function Square() {
  return <button className="square">1</button>
}
function App() {
  return (
    <>
    <div className="board-row">
       <Square/>
       <Square/>
       <Square/>
       </div>
       <div className="board-row">
       <button className="square">4</button>
       <button className="square">5</button>
       <button className="square">6</button>
       </div>
       <div className="board-row">
       <button className="square">7</button>
       <button className="square">8</button>
       <button className="square">9</button>
       </div>
    </>
   

  );
}

export default App;
