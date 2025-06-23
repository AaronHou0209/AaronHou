import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/addTask";
import Footer from "./components/footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import Home from "./components/Home";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(true);

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:9000/tasks");

        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };

    fetchTasks();
  }, []);

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:9000/tasks/${id}`, { method: "DELETE" });
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle task reminder
  const toggleReminder = async (id) => {
    const res = await fetch(`http://localhost:9000/tasks/${id}`);
    const taskToggle = await res.json();

    const updatedTask = { ...taskToggle, reminder: !taskToggle.reminder };

    const updatedRes = await fetch(`http://localhost:9000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    const data = await updatedRes.json();

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // Add new task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:9000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks((prevTasks) => [...prevTasks, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home />
              // <>
              //   {showAddTask && <AddTask onAdd={addTask} />}
              //   {tasks.length > 0 ? (
              //     <Tasks
              //       tasks={tasks}
              //       onDelete={deleteTask}
              //       onToggle={toggleReminder}
              //     />
              //   ) : (
              //     "No tasks to display"
              //   )}
              // </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
