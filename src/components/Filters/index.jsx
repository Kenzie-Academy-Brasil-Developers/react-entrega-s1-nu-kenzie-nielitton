import './style.css'

function Filters({ showTransictionFiltered }) {
  return (
    <div className="containerFilters">
      <button className="filterTodos" onClick={() => showTransictionFiltered()}>
        Todos
      </button>
      <button
        className="filterEntered"
        onClick={() => showTransictionFiltered("Entrada")}
      >
        Entradas
      </button>
      <button
        className="filterLeave"
        onClick={() => showTransictionFiltered("Saída")}
      >
        Saídas
      </button>
    </div>
  );
}

export default Filters;
