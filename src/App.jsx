import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/header/header";
import Main from "./pages/main/main";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
