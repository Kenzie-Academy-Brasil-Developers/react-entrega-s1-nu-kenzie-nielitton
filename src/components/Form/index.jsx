import { useState } from "react";
import "./style.css";

function Form({ listTransictions, setListTransictions }) {
  const [valueDesc, setValueDesc] = useState("");
  const [valueValor, setValueValor] = useState("");
  const [valorType, setValorType] = useState("Entrada");

  function addNewTransition() {
    let newTansition = {
      description: valueDesc,
      type: valorType,
      value:
        valorType === "Entrada" ? Number(valueValor) : Number(valueValor * -1),
    };
    console.log(listTransictions);
    setListTransictions([...listTransictions, newTansition]);
  }

  return (
    <form
      className="formTransictions"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="divDesc">
        <span className="spanDesc">Descrição</span>
        <input
          className="inputDesc"
          placeholder="Digite aqui sua descrição"
          type="text"
          value={valueDesc}
          onChange={(event) => setValueDesc(event.target.value)}
        />
        <p className="paragraphDesc">Ex: Compra de roupas</p>
      </div>

      <div className="valorAndType">
        <div className="divValor">
          <span className="spanValor">Valor</span>
          <input
            className="inputValor"
            placeholder="1 R$"
            type="text"
            value={valueValor}
            onChange={(event) => setValueValor(event.target.value)}
          />
        </div>
        <div className="tipoValor">
          <span className="spanType">Tipo de valor</span>
          <select
            className="selectType"
            name="selectEntrada"
            id="entradaOuSaída"
            onChange={(event) => setValorType(event.target.value)}
          >
            <option value="Entrada" defaultValue="Entrada">
              Entrada
            </option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button className="insertValor" onClick={() => addNewTransition()}>
        Inserir valor
      </button>
    </form>
  );
}

export default Form;
