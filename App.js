import React from "react";
import PropTypes from "prop-types"
import TodoList from "./Todo/TodoList";
 // придумали масссив -  todos
 //<TodoList свойства - todos={массив - todos} />
function App() {
 
  const todos =[
  {id: 1, completed: false, title:"Купить орехи"},
  {id: 2, completed: false, title:"Купить масло"},
  {id: 3, completed: false, title:"Купить фрукты"},

]
  return (<div className="w">
   <h1>React proba1 test12</h1>

   <button className="but">нажми меня</button>
    <TodoList todos={todos} />
  </div>)
}

export default App
