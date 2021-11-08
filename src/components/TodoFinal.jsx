import React from "react";
import { connect } from "react-redux";
import { addTodos, removeTodos } from "../redux/reducer";
import TodoList from "./TodoList";

const mapStateToProps = (state) => ({
  todos: state,
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(addTodos(obj)),
  removeTodo: (id) => dispatch(removeTodos(id)),

});
const TodoFinal = (props) => (
  props.todos.map((item) => (
    <TodoList
      key={item.id}
      item={item}
      removeTodo={props.removeTodo}
    />
  ))
);
export default connect(mapStateToProps, mapDispatchToProps)(TodoFinal);
