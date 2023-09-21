import React from "react";
import PropTypes from "prop-types";

const styles={
    li:{
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
     padding: ".5rem 1rem",
     border: "1px solid #ccc",
     borderRadius: "4px",
     marginButton: ".5rem"
    },
    import:{
        marginRight: "1rem"
    }
    
        
    
}

 function SwoyList({todo, index}) {
    return(
        
        <li style = {styles.li}>
        <span>
          <input type="checkbox" style={StyleSheetList.input} onChange={()=> console.log(todo.id)}/>
          <strong>{index +1}</strong>
          &nbsp;
          {todo.title}
        </span>
        <button className="rm">&times;</button>
       
        </li>
    )
}
  SwoyList.propTypes=
{
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}
export default SwoyList;