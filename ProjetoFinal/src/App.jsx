import FAQ from "./component/FAQ";
import CompanyInfo from "./component/CompanyInfo";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<CompanyInfo />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
