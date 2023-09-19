import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { HashRouter } from "react-router-dom"
import { Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Suspense>
        <App />
      </Suspense>
    </HashRouter>
);

