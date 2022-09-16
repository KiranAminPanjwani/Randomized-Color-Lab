import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
