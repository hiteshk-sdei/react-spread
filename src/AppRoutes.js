import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Spreadsheet from "./Pages/SpreadSheet";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Spreadsheet/>}/>
            </Routes>
        </Router>
    )
}
export default AppRoutes;