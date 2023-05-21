import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../components/Home'
import Create  from '../components/Create'
import Team from '../components/Team'
import Header  from '../components/Header'
import Footer from '../components/Footer'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home />},
    { path: '/Create', element: <Create />},
    { path: 'Team', element: <Team />},
    { path: '/Header', element: <Header />},
    { path: '/Footer', element: <Footer/>},
  ])
  return routes
}

const App =   () => {
  return (
  <BrowserRouter> 
  <AppRoutes />
  </BrowserRouter>
  )
}

export default App
