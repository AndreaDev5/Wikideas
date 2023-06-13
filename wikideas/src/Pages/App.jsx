import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Create from "../components/Create";
import Team from "../components/Team";
import Contact from "../components/Contact";
import axios from 'axios';

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
  axios.get('http://localhost:3900/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
