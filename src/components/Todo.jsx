import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

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

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input type="text" onChange={(e) => handleChange(e)} value={todo} />
          <button onClick={() => add()}>Add</button>
        </label>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
