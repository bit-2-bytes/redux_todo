import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../app/features/todo/todoSlice.js";
import { useState } from "react";

function TodoList() {
  const [listValue, setListValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editValueIndex, setEditValueIndex] = useState(-1);
  const listArr = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addTodo(listValue));
    setListValue("");
  };
  const handleEdit = (text, index) => {
    setEditValue(text);
    setEditValueIndex(index);
  };
  const handleSave = (object) => {
    const parsedObj = JSON.parse(JSON.stringify(object));
    parsedObj.text = editValue;
    console.log(object.text);
    dispatch(updateTodo(parsedObj));
    setEditValueIndex(-1);
  };
  return (
    <div className="TodoList">
      <input
        value={listValue}
        onInput={(e) => setListValue(e.target.value)}
      ></input>
      <button onClick={handleAdd}> Add to List</button>
      {listArr.map((element, index) => (
        <li style={{display: "flex"}}>
          <input
            style={{ display: editValueIndex !== index ? "none" : "block" }}
            onInput={(e) => setEditValue(e.target.value)}
            value={editValue}
          ></input>
          <p style={{ display: editValueIndex === index ? "none" : "block" }}>
            {element.text}
          </p>
          <button
            style={{ display: editValueIndex !== index ? "none" : "block" }}
            onClick={() => handleSave(element)}
          >
            Save
          </button>
          <button
            style={{ display: editValueIndex === index ? "none" : "block" }}
            onClick={() => handleEdit(element.text, index)}
          >
            Edit
          </button>
          <button onClick={() => dispatch(deleteTodo(element.id))}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
