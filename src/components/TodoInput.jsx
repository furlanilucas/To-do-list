import { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    onAdd(value)
    setText('')
  }

  return (
    <form className="row" onSubmit={submit} aria-label="Adicionar tarefa">
      <input
        className="input"
        type="text"
        placeholder="O que precisa ser feito?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Título da tarefa"
      />
      <button className="btn success" type="submit">Adicionar</button>
    </form>
  )
}
