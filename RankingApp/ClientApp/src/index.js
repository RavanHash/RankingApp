import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

const Root = () => (
    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Root />);
