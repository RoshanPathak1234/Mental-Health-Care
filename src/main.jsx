import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "/public/style/Style.css"
import "/public/style/global.css"
import App from './App.jsx'
import Funbot from './pages/Funbot/Funbot.jsx'
import Chatbot from './pages/chatBot/Chatbot.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path : "/Funbot",
    element : <Funbot/>,
  },
  {
    path : "/Chatbot",
    element : <Chatbot/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
