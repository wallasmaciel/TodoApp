import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Todo from '../todo';
import About from '../about';

export default props => (
    <Routes>
        <Route path='/' element={<Todo />} />

        <Route path='/todo' element={<Todo />} />
        <Route path='/about' element={<About />} />

        <Route path="*" element={
            <h2>404 not found</h2>
        } />
    </Routes>
);