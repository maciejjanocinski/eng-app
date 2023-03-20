import { useState, useEffect } from 'react';
import '../src/global-styles/style.scss'
import './component-styles/App.scss'

import ABCD from './pages/abcd'
import IrregularVerb from './components/irregularVerb'

function App() {

    

    return (
        <div className="App">
           <IrregularVerb />
        </div>
    );
}

export default App;
