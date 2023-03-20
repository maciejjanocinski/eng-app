import React from "react";
import data from "../data/irregularVerbs";
import Verb from "../components/irregularVerb";
import "../component-styles/irregularVerbs.scss";

function IrregularVerbs() {
  const [answers, setAnswers] = React.useState([]);
  const [points, setPoints] = React.useState(0)
  const [gameOver, setGameOver] = React.useState(false)
  

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


const handleButtonClick = () => {


if(!gameOver){
    setGameOver(prevState => !prevState)
    answers.forEach(e => {

      const index = data.findIndex(dataElement =>  dataElement.id === e.id)
    
      if(data[index].correct === e.inputValue){
        setPoints(prevState => prevState += 1)  
        let input = document.getElementById(`input_${e.id}`)
        input.style.backgroundColor = 'green';
      } else {
        points > 0 && setPoints(prevState => prevState -=1)   
        let input = document.getElementById(`input_${e.id}`)
        input.style.backgroundColor = 'red';
      }
      
    })


    document.querySelectorAll('input').forEach(element => {
      if(element.value.length === 0){
        element.style.backgroundColor = 'red'
      }
    })



  } else {
    setGameOver(prevState => !prevState)
        setPoints(0)
        setAnswers([])
        let inputs = document.querySelectorAll('input')
        inputs.forEach(e => {
          e.style.backgroundColor = 'transparent'
          e.value =''
        })
  }



}
   

  const renderVerbs = data.map((e, i) => (
    <Verb {...e} key={i} function={handleInputValue}  />
  ));

  return (
    <div className="irregular-verbs">
      <table className="irregular-verbs__table">
        <tbody>{renderVerbs}</tbody>
      </table>
      <button
       onClick={handleButtonClick}
       disabled={answers.length === 0}
        > 
       {gameOver ? 'Jeszcze raz' : 'Sprawdź'}
       </button>
    </div>
  );
}

export default IrregularVerbs;
