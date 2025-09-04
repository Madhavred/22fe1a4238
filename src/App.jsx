import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UrlShortenerPage from "./pages/UrlShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<UrlShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
