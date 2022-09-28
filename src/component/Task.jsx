import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="T-S">
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {task.text}
        </div>
        {task.day}
      </div>
      <FaTimes
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

export default Task;
