import { use, useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/Todoform';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  // objetos de dados que serão utilizados
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar uma funcionalidade do sistema X",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: true
    },
    {
      id: 3,
      text: "Estudar",
      category: "Estudos",
      isCompleted: false
    }
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false
    }]
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todos) => todos.id === id ? todos.isCompleted = !todos.isCompleted : todos);
    setTodos(newTodos);
  }

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>

        {todos
          .filter((todos) => filter === "All" ? true : filter === "Completed" ? todos.isCompleted : !todos.isCompleted)
          .filter((todos) => todos.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todos) => (
            <Todo todo={todos} key={todos.id} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}

      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
