import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import Page from '../pages';

const Component = () => {
  return (
    <Routes>
      <Route path="/*" element={<Page/>}/>
    </Routes>
  );
}

export default Component;