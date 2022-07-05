import './App.css';
import React, {useState , useEffect} from 'react';
//importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
 
  //State Stuff
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status , setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  },[])
   //Use Effect
   useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos,status]);


  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
  };

  //save to localStorage
  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
   
  return (
    <div className="App">
     <header>
      <h1>Joss's To-Do List</h1>
     </header>
     <Form todos={todos} setTodos={setTodos}  inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
     <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
