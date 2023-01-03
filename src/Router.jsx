import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./layout/Container";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
