import { useState } from 'react';

// CSS
import './App.css';

// Components
import Header from './Header/Header.js'

// Data
import todos from './Data/datas.json'
import Todo from './Todo/Todo.js';

function App() {
  const [currentTodos, setTodos] = useState(todos);
  const taches = currentTodos.taches;

  return (
    <div className="App">
      <Header taches={taches} />
      <Todo currentTodos={currentTodos} setTodos={setTodos} />
    </div>
  );
}




export default App;
