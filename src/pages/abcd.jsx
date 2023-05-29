import React, { useState, useEffect } from 'react';
import '../component-styles/ABCD.scss'

 import ABCDquestion from '../components/ABCDquestion'
 import data from "../data/abcd";


function ABCD() {

    const [questions, setQuestions] = useState(data)
    const [points, setPoints] = useState(0)
    const [activeBtn, setActiveBtn] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {

        setActiveBtn(questions.every(question => question.selected !== null))

    }, [questions])

    const answer = event => {

        const list = [...questions];
        list[event.target.parentElement.id].selected = event.target.id;
        setQuestions(list);

        const abcd = event.target.parentElement.querySelectorAll('p');

        abcd.forEach(e => {
            if (!gameOver) {
                e.classList.remove('selected')
                event.target.classList.add('selected')
            }
        }
        )

    };

    const handleCheckButton = () => {
        if (!gameOver) {
            questions.map((e, i) => {
                e.correct === e.selected && setPoints(prevState => prevState += 1)
                const q = document.getElementById(questions[i].number)
                const abcd = q.querySelectorAll('p')

                abcd.forEach(e => {
                    e.id === questions[i].correct && e.classList.add('correct')
                })
            })

            const selected = document.querySelectorAll('.selected')
            selected.forEach(e => e.classList.add('wrong'))

            setGameOver(prevState => !prevState)
            document.querySelector('.question-section').querySelectorAll('p').classList.add('bejbe')
        } else {
            setQuestions(prevState => prevState.map(e => {
                return { ...e, selected: null, }
            }))

            questions.map((e, i) => {

                const q = document.getElementById(questions[i].number)
                const abcd = q.querySelectorAll('p')

                abcd.forEach(e => {
                    e.classList.remove('correct')
                    e.classList.remove('wrong')
                    e.classList.remove('selected')
                })
            })

            setGameOver(prevState => !prevState)
            setPoints(0);
            window.scrollTo(0,0);
        }

    }





    const renderABCD = data.map((element, i) => <ABCDquestion {...element} key={element.question} func={answer} index={i} />)


    return (
        <div className="App">
            <form action="/" method={"GET"}>
                <button className="backButton">
                    Wróć
                </button>
            </form>
            <div className="question-section">
                {renderABCD}
            </div>

            <button
                className="check"
                onClick={handleCheckButton}
                disabled={!activeBtn}
            >
                {gameOver ? 'Jeszcze raz' : 'Sprawdź'}
            </button>
            <p
                className='counter'
                style={{ display: gameOver ? 'block' : 'none' }}
            >
                Wynik: {((points / questions.length) * 100).toFixed(0)} %</p>


        </div>


    );
}

export default ABCD;
