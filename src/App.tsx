import React from 'react';
import Parents from './component/Parents';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/parents" element={<Parents />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
