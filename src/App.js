import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import {Teste} from "./pages";
import { Register } from "./pages/cadastrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/feed' element={<Feed />}/>
        <Route path='/teste' element={<Teste />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
