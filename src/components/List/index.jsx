import "./style.css";
import Card from "../Card";

function List({ listTransiction, setListTransiction }) {
  return (
    <section className="sectionCards">
      {listTransiction.map((transaction, index) => (
        <Card
          transaction={transaction}
          key={index}
          listTransictions={listTransiction}
          setListTransiction={setListTransiction}
        />
      ))}
    </section>
  );
}

export default List;
