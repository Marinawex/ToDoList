import './App.css';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";

function Counter(){
  const [counter, setcounter] = useState(10);
  
  function addone(){
    setcounter(counter => counter+1)
  }
  return(
    <button onClick={addone}
        >{counter}</button>
  )
  
 }

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);
 
  

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then( response => response.json())
  //       .then(setTodos)
  // }, []);

  useEffect(() => {
      const uncompleted = todos.filter( todo => !todo.completed );
      setNoneCompletedItemsCount(uncompleted.length);
  }, [todos])

  const appTitle = 'TodosApp';


  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false}])
    setTodos(newTodos);
    console.log(todos)
    console.log(newTodos)
  
    // todos = [ ...todos, { id: Date.now(), title, completed: false } ]
  }

  const removeTodo = (todoToRemove) => {
    const newTodos = todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
    setTodos(newTodos);
    console.log(todos)
    console.log(newTodos)
   
  
   
  }

  const markAsCompleted = (task) => {
    const newTodos = todos.map(curTask => (curTask === task ?
      ({...curTask, completed: !curTask.completed}) : curTask));
  setTodos(newTodos);
    console.log(newTodos)


   
    
    

  };

  const clearAllCompletedItems = () => {
    const newTodos =  todos.filter( currentTodo => !currentTodo.completed );
    
    setTodos(newTodos)
  }

  const toggleAllItems = (checkedValue) => {
   
    setTodos(todos.map( todo => ({ ...todo, completed: checkedValue })))
   
   
  }

  const onSetUpdat = (updatedTitle,id) =>{
   const newTodos = todos.map(todo => todo.id === id ?
      ({...todo, title: updatedTitle}): todo)
      setTodos(newTodos)
  }


 

  return (
      <section className="todoapp">
       
        <Header title={appTitle}
                onAddItem={addTodo}
                text="What needs to be done?" 
              
                 />
        <Main items={todos}
              onToggleAll={toggleAllItems}
              onRemoveItem={removeTodo}
              onMarkedCompleted={markAsCompleted}
              onSetUpdat={onSetUpdat}
              
        />
        <Footer
            itemLeftCount={noneCompletedItemsCount}
            onClearCompleted={clearAllCompletedItems}/>
        
      </section>
  )
}

export default App;