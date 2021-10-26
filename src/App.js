
import './App.css';
// imported Todo
import Todos from './components/Todo';
// imported TodoFinal component
import TodoFinal from './components/TodoFinal';

function App() {
  return (
    <div className="App">
      <Todos />
      <TodoFinal/>
    </div>
  );
}

export default App;
