import { HashRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import Characters from "./components/Characters";
import UserInput from "./components/UserInput";
import './App.css'
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  return (

    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
          </Route>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
