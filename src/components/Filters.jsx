export const FILTERS = {
  all: (t) => true,
  active: (t) => !t.completed,
  completed: (t) => t.completed,
}

export default function Filters({ current, onChange, activeCount, totalCount, onClearCompleted }) {
  return (
    <div className="toolbar" role="radiogroup" aria-label="Filtros">
      <button className={`chip ${current === 'all' ? 'active' : ''}`}
              onClick={() => onChange('all')} role="radio" aria-checked={current==='all'}>
        Todas
      </button>
      <button className={`chip ${current === 'active' ? 'active' : ''}`}
              onClick={() => onChange('active')} role="radio" aria-checked={current==='active'}>
        Ativas
      </button>
      <button className={`chip ${current === 'completed' ? 'active' : ''}`}
              onClick={() => onChange('completed')} role="radio" aria-checked={current==='completed'}>
        Concluídas
      </button>
      <span style={{marginLeft:'auto'}}>{activeCount} abertas de {totalCount}</span>
      <button className="btn" onClick={onClearCompleted}>Limpar concluídas</button>
    </div>
  )
}
