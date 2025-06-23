import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task, i) => (
        <Task task={task} key={i} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default Tasks;
