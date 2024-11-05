import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InputPage } from './pages/InputPage';
import { VisualizationPage } from './pages/VisualizationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/visualization" element={<VisualizationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;