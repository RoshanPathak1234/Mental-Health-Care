import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "/public/style/Style.css"
import "/public/style/global.css"
import App from './App.jsx'
import Funbot from './pages/Funbot/Funbot.jsx'
import Chatbot from './pages/chatBot/Chatbot.jsx'
import LoginForm from './pages/Forms/LoginForm.jsx';
import Registration from './pages/Forms/Registration.jsx';
import About from './pages/informative/About.jsx';
import Contact from './pages/informative/Contact.jsx';

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
  {
    path : "/Login",
    element : <LoginForm />
  },
  {
    path: "/Registration",
    element : <Registration />
  },
  {
    path: "/About",
    element : <About />
  },
  {
    path: "/Contact",
    element : <Contact />
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
