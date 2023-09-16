import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ToDo from "./pages/ToDo";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
