import React from "react";
import SwoyList from "./SwoyList";
const styles  ={
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0


    }
}
 function TodoList(props){
    return(
        
    <ul style={styles.ul}>
    {/* todos - массив, todo - придумали элемент */}
        { props.todos.map((todo,index)=>{
            return <SwoyList todo={todo} key={todo.id} index={index}/>
        })
        
        }
     </ul>
     
    )

}
TodoList.propTypes=
[]
export default TodoList;