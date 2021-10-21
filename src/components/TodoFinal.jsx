import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos,removeTodos } from "../redux/reducer";
import TodoList from "./TodoList";

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
      removeTodo: (id) => dispatch(removeTodos(id)),
      
    };
  };
const TodoFinal = (props) => {
    return(
        props.todos.map((item) => {
            return(
                <TodoList
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                />
            );
    
        
        
            })
    )    
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoFinal);
