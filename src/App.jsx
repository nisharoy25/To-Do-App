import TodoItem from "./TodoItem"
import AddToDo from "./components/AddToDo"
import AppName from "./components/AppName"
import "./App.css"

function App() {
  console.log('I was triggered during app.jsx')
  return (
    
      <center className="todo-container">
      <AppName/>
      <AddToDo/>
      <div className="items-container">
        <TodoItem/>
        <TodoItem/>
      </div>
      </center>
    
  );
}

export default App;
