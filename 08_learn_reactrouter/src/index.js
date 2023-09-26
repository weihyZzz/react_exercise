import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { HashRouter } from "react-router-dom"
import { Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <App />
      </Suspense>
    </HashRouter>
);

