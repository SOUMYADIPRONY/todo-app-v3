import { MdOutlineDeleteOutline } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row sd-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger delete"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
