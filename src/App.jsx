import './components/TodoHeader'
import TodoHeader from './components/TodoHeader';
import TodoAdd from './components/TodoAdd';
import TodoItems from './components/TodoItems';
import WelcomeMsg from './components/WelcomeMsg';
import { useState } from 'react';

function App() {

var initialTodoItems = [
//   {
//     name:'abc',
//     date:'1/1/2023'
//  },
//  {
//   name:'xyz',
//   date:'2/2/2023'
//  }

]

const [todoItems, setTodoItems] = useState(initialTodoItems);

const handleAddButton = (itemName,dueDate) =>{
  console.log(`New : ${itemName} ${dueDate}` );
  const newTodoItems = [...todoItems, {name:itemName,date:dueDate}];
  setTodoItems(newTodoItems);
}

const handleDeleteButton = (TodoitemName) => {
  // console.log("HI");
  const newTodoItems = todoItems.filter(item => item.name !== TodoitemName);
  setTodoItems(newTodoItems);
}


 return(
  <>
  <center>
  <h1>HI</h1>
  <TodoHeader></TodoHeader>
  <TodoAdd onAddClick={handleAddButton}></TodoAdd>
  {todoItems.length <= 0 ? <WelcomeMsg></WelcomeMsg> : null}

  
  <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton}></TodoItems>
  </center>
  </>
 );
  
}

export default App
