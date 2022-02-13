import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Filters from "./components/Filters";
import InitialDashboard from "./components/initialDashboard";

function App() {
  const [listTransictions, setListTransictions] = useState([]);
  const [transictionsFiltered, setTransictionsFiltered] = useState([]);
  const [initialDashBoard, setInitialDashBoard] = useState(false);

  function start() {
    setInitialDashBoard(!initialDashBoard);
  }

  function showTransictionFiltered(valueType) {
    const newTransictions = listTransictions.filter((transictions) => {
      return transictions.type === valueType;
    });
    setTransictionsFiltered(newTransictions);
  }

  return (
    <div className="App">
      <header className="App-body">
        {initialDashBoard === false ? (
          <InitialDashboard start={start} />
        ) : (
          <>
            <Header start={start} />
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
                <Filters showTransictionFiltered={showTransictionFiltered} />
                <List
                  listTransiction={
                    transictionsFiltered.length > 0
                      ? transictionsFiltered
                      : listTransictions
                  }
                  setListTransiction={setListTransictions}
                />
              </section>
            </main>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
