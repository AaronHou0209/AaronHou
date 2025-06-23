import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`http://localhost:9000/tasks/${id}`);

        if (!res.ok) {
          if (res.status === 404) {
            return navigate("/"); // ✅ 正確處理 404 錯誤
          }
          throw new Error("Failed to fetch task");
        }

        const data = await res.json();
        setTask(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id, navigate]);

  if (error) return <h3>Error: {error}</h3>;
  if (!task) return <h3>Task not found</h3>;

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="detail">
      <p>{pathname}</p>
      <h3>{task.title}</h3>
      <hr />
      <p>{task.day}</p>
      <p>{task.reminder.toString()}</p>
      {/* <Link to="/">Back</Link> */}
      <Button text="Go Back " onClick={() => navigate(-1)} color="gray" />
      <p>This is located at {pathname}</p>
    </div>
  );
};

export default TaskDetails;
