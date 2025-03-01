import logo from './logo.svg';
import './App.css';

//Component
function Square({value}) {
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
       <Square/>
       <Square/>
       <Square/>
       </div>
       <div className="board-row">
       <Square/>
       <Square/>
       <Square/>
       </div>
    </>
   

  );
}

export default App;
