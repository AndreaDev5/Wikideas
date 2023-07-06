import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Create from "../components/Create";
import Team from "../components/Team";
import Contact from "../components/Contact";
import '../css/Scroollbar.css';


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/team", element: <Team /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return routes;
}; 

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
