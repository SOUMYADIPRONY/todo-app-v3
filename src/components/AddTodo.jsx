import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ onButtonClick }) {
  const [todoName, setTodoName] = useState("");

  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    onButtonClick(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <>
      <div className="container">
        <div className="row sd-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter ToDo here"
              value={todoName}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="col-4">
            <input
              type="date"
              value={dueDate}
              onChange={handleDateChange}
            ></input>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success add"
              onClick={handleAddButtonClicked}
            >
              <IoIosAddCircleOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
