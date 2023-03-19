import React from 'react';

import '../component-styles/ABCD.scss'


const ABCDquestion = (data) => {



    return (
        <div className="ABCD" id={data.index}>
            <h2 className="ABCD__question">{data.question}</h2>
            <p className="ABCD__answer" id={'A'} onClick={data.func} > <span>A. </span> {data.A}</p>
            <p className="ABCD__answer" id={'B'} onClick={data.func} > <span>B. </span> {data.B}</p>
            <p className="ABCD__answer" id={'C'} onClick={data.func} > <span>C. </span> {data.C}</p>
            <p className="ABCD__answer" id={'D'} onClick={data.func} > <span>D. </span> {data.D}</p>
            <hr />
        </div>
    );
}

export default ABCDquestion;