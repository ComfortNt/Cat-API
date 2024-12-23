import { CatApi } from "./Componets/CatFact";
import { GetAge } from "./Componets/GenerateAge";
import { Nav } from "./Componets/Nav";
import { Home } from "./Componets/Home";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


function App() {


  return (

    <Router>
      <Nav/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<CatApi/>} path="/cat"/>
        <Route element={<GetAge/>} path="/age"/>
      </Routes>
    </Router>
    

  )
}

export default App
