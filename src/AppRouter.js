import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import List from './Components/List';
import DetailList from './Components/DetailList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/detail/:names" element={<DetailList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
