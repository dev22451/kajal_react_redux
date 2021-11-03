import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (obj) => dispatch(addTodos(obj)),
});

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const add = () => {
    if (todo === "") {
      alert("empty");
    } else {
      // eslint-disable-next-line react/prop-types
      props.addTodo({
        id: Date.now(),
        item: todo,
      });
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => handleChange(e)} value={todo} />
        <button type="button" onClick={() => add()}>Add</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
