import { useMemo, useState } from 'react'
import TodoInput from './components/ToDoInput.jsx'
import TodoItem from './components/ToDoItem.jsx'
import Filters, { FILTERS } from './components/Filters.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'

const uid = () => Math.random().toString(36).slice(2, 10)

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos:v1', [
    { id: uid(), title: 'Estudar React', completed: false },
    { id: uid(), title: 'Construir uma lista de tarefas', completed: true },
  ])
  
  const [filter, setFilter] = useState('all')
  const visible = useMemo(() => todos.filter(FILTERS[filter]), [todos, filter])
  const activeCount = useMemo(() => todos.filter(t => !t.completed).length, [todos])
  const totalCount = todos.length
  const addTodo = (title) => setTodos([{ id: uid(), title, completed: false }, ...todos])
  const toggleTodo = (id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  const editTodo = (id, title) => setTodos(todos.map(t => t.id === id ? { ...t, title } : t))
  const removeTodo = (id) => setTodos(todos.filter(t => t.id !== id))
  const clearCompleted = () => setTodos(todos.filter(t => !t.completed))

  return (
    <div className="container">
      <div className="card">
        <h1>Lista de Tarefas</h1>
        <p className="subtitle">React + Vite, LocalStorage, filtros e edição inline.</p>
        <TodoInput onAdd={addTodo} />
        <Filters
          current={filter}
          onChange={setFilter}
          activeCount={activeCount}
          totalCount={totalCount}
          onClearCompleted={clearCompleted}
        />
          {visible.length === 0 ? (
          <div className="empty">Nenhuma tarefa aqui. Adicione a primeira! ✨</div>
        ) : (
          <ul className="list">
            {visible.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onEdit={editTodo}
                onRemove={removeTodo}
              />
            ))}
          </ul>
        )}
          <div className="footer">
          <span>Dica: dê duplo clique no texto para editar.</span>
        </div>
      </div>
    </div>
  )
}
