import React from "react";
import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom';
import { Header } from './components';

import './app.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Pages.HomePage />}/>
                <Route path="/heroes/:id" element={<Pages.ShowPage />}/>
                <Route path="/battle" element={<Pages.Battle />}/>
                <Route path="*" element={<Pages.NotFoundPage />}/>
            </Route>
        </Routes>
    )
};

export default App;
