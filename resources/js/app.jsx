import React from 'react';
import { createRoot } from 'react-dom/client';


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Example from './components/Dashboard';
import Dashboard from './components/Dashboard';

if (document.getElementById('app')) {
    createRoot(document.getElementById('react-app')).render(
        <React.StrictMode>
            <Dashboard />
        </React.StrictMode>
    );
}
