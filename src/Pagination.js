import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Pagination() {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => setTodos(resp.data));
  }, []);
  const totalPages = Math.ceil(todos.length / todosPerPage);
  const pageArray = [...Array(totalPages + 1).keys()].slice(1);
  const lastTodoIndex = currentPage * todosPerPage;
  const visisbleTodos = todos.slice(
    lastTodoIndex - todosPerPage,
    lastTodoIndex
  );
  console.log(visisbleTodos);
  return (
    <div className="App">
      <h1>TODO's (pagination example)</h1>
      {visisbleTodos.map((todo) => (
        <p key={todo.id}>
          {todo.id}. {todo.title}
        </p>
      ))}
      <br />
      Select number of Todos per page:{" "}
      <select onClick={(e) => setTodosPerPage(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <br />
      <span
        onClick={() =>
          currentPage !== 1 ? setCurrentPage(currentPage - 1) : ""
        }
      >
        Prev{" "}
      </span>
      {pageArray.map((page) => (
        <span
          onClick={() => setCurrentPage(page)}
          key={page}
          className={page === currentPage ? "active" : ""}
        >
          {page} | {"  "}
        </span>
      ))}
      <span
        onClick={() =>
          currentPage !== totalPages ? setCurrentPage(currentPage + 1) : ""
        }
      >
        {" "}
        Next
      </span>
    </div>
  );
}
