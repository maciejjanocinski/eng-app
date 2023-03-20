import { useState, useEffect } from "react";
import "../src/global-styles/style.scss";
import "./component-styles/App.scss";

//import ABCD from './pages/abcd'
import IrregularVerbs from "./pages/irregularVerbs";

function App() {
  return (
    <div className="App">
      <IrregularVerbs />
    </div>
  );
}

export default App;
