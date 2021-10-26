

// creating UI part- adding input box and add button

import React, { useState } from "react";
// imported {connect} method
import { connect } from "react-redux";
// imported action addTodos
import { addTodos } from "../redux/reducer";
// adding  mapStateToProps method to map the state and props at store
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
// adding mapDispatchToProps method
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

// adding state
const Todos = (props) => {
  const [todo, setTodo] = useState("");
  // / created add function 

  const add = () => {
    if (todo === "") {
      alert("empty");
    } else {
      props.addTodo({
        id:  Date.now(),
        item: todo,
      });
      setTodo("");
      console.log(props.addTodo);
    }
  };
  // created a handleChange event

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          {/* calling the handleChange event on event triggered in input box */}
          <input type="text" onChange={(e) => handleChange(e)} value={todo} />
          {/* calling the add function on button click */}
          <button onClick={() => add()}>Add</button>
        </label>
      </div>
    </div>
  );
};
// exported mapStateToProps,mapDispatchToProps method with Todos
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
