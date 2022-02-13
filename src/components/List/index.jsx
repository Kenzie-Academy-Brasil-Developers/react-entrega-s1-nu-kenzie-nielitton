import "./style.css";
import Card from "../Card";

function List({ listTransiction, setListTransiction }) {
  function trash(itemToRemove) {
    const newTransictions = listTransiction.filter((item) => {
      return item !== itemToRemove;
    });
    setListTransiction(newTransictions);
  }

  return (
    <section className="sectionCards">
      {listTransiction.map((transaction, index) => (
        <Card
          trash={trash}
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
