import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => {
        onToggle(task.id);
      }}
      className={`task ${task.reminder ? "reminder" : ""}`}
    >
      <h3>
        {task.title}{" "}
        <FaTimes
          style={{ color: "red" }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>
      <p>{task.day}</p>
      <Link to={`/task/${task.id}`} className="link">
        Details
      </Link>
    </div>
  );
};

export default Task;
