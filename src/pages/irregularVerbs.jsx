import React from "react";
import data from "../data/irregularVerbs";
import Verb from "../components/irregularVerb";
import "../component-styles/irregularVerbs.scss";

function IrregularVerbs() {
  const [answers, setAnswers] = React.useState([]);

  const handleInputValue = (id, inputValue) => {
    const index = answers.findIndex((e) => e.id === id);

    if (index !== -1) {
      setAnswers((prevState) =>
        prevState.map((e) => {
          return e.id === id ? { id: id, inputValue: inputValue } : e;
        })
      );
    } else {
      setAnswers(prevState => [...prevState, {id: id, inputValue: inputValue}])
    }
  };


const f = () => {
  console.log(answers);
}

  const renderVerbs = data.map((e, i) => (
    <Verb {...e} key={i} function={handleInputValue} />
  ));

  return (
    <div className="irregular-verbs">
      <table className="irregular-verbs__table">
        <tbody>{renderVerbs}</tbody>
      </table>
      <button onClick={f} > Click </button>
    </div>
  );
}

export default IrregularVerbs;
