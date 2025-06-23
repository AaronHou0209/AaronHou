import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    onAdd({ title, day, reminder });
    setTitle("");
    setDay("");
    setReminder(false);
    e.preventDefault(); //防止網頁刷新
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-control">
        <label>Day&Time</label>
        <input
          type="text"
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <div className="form-control">
        <label>Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => setReminder(e.target.checked)}
          checked={reminder}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-submit" />
    </form>
  );
};

export default AddTask;
