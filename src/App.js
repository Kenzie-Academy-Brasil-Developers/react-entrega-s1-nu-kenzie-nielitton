import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";

function App() {
  const [listTransictions, setListTransictions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 },
  ]);

  return (
    <div className="App">
      <header className="App-body">
        <Header />
        <main className="dashboard-content">
          <div>
            <Form
              listTransictions={listTransictions}
              setListTransictions={setListTransictions}
            />
            <TotalMoney listTransiction={listTransictions} />
          </div>
          <section className="sectionList">
            <span className="resumoList">Resumo financeiro</span>
            <List listTransiction={listTransictions} />
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
