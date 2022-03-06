import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./componennts/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
