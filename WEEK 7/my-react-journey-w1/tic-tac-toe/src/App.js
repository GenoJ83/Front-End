import logo from './logo.svg';
import './App.css';

//Component
function Square({value}) {

  function handleButtonClick(){
    console.log("click action", value);

  }
  return <button onClick={handleButtonClick} className="square">{value}</button>
}
function App() {
  return (
    <>
    <div className="board-row">
       <Square value="1"/>
       <Square value="2"/>
       <Square value="3"/>
       </div>
       <div className="board-row">
       <Square value="4"/>
       <Square value="5"/>
       <Square value="6"/>
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
