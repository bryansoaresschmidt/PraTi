import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./component/MovieAPI";
import Search from "./component/Search";

import { register } from "swiper/element/bundle"
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />

            <Router>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="search" element={<Search />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="movie/:id" element={<Movie />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
