import { useState } from 'react'

export default function TodoItem({ todo, onToggle, onEdit, onRemove }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)

  const commit = () => {
    const value = draft.trim()
    if (value && value !== todo.title) onEdit(todo.id, value)
    setEditing(false)
  } 
  return (
    <li className={`item ${todo.completed ? 'completed' : ''}`}>
      <button
        className={`checkbox ${todo.completed ? 'checked' : ''}`}
        aria-label={todo.completed ? 'Marcar como não concluída' : 'Marcar como concluída'}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed ? '✓' : ''}
      </button>
      <div>
        {editing ? (
          <input
            className="input"
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => e.key === 'Enter' && commit()}
            aria-label="Editar título"
          />
        ) : (
          <p className="title" onDoubleClick={() => setEditing(true)}>{todo.title}</p>
        )}
        <small>ID: {todo.id}</small>
      </div>
      <div className="actions">
        {!editing && (
          <button className="btn ghost" onClick={() => setEditing(true)} title="Editar">Editar</button>
        )}
        <button className="btn danger" onClick={() => onRemove(todo.id)} title="Excluir">Excluir</button>
      </div>
    </li>
  )
}
