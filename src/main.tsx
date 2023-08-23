// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Router from './router/router.tsx';
import PostContextProvider from './context/PostContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <PostContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PostContextProvider>
  // </React.StrictMode>,
)
