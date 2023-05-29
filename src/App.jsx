import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "../src/global-styles/style.scss";
import "./component-styles/App.scss";

import ABCD from './pages/abcd'
import IrregularVerbs from "./pages/irregularVerbs";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/irregularVerbs' element={<IrregularVerbs />} />
            <Route path='/abcd' element={<ABCD />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
