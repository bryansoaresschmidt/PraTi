import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaStar } from 'react-icons/fa';
import MovieCard from "./MovieCard";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    position: relative;
    background-color: black;
    @media (max-width: 950px) {
        font-size: 25px;
        padding: 20px 40px;
    }
    @media (min-width: 1000px) {
        font-size: 30px;
        padding: 20px 150px;
    }
    `;
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    gap: 30px;
    margin-top: 100px;
    `;
const Form = styled.form`
    display: flex;
    gap: 10px;
    position: relative;
    top: 4px;
    `;
const Input = styled.input`
    background-color: rgba(40, 40, 40);
    border: none;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    &::placeholder {
        color: rgba(255, 255, 255, 0.8);
    }
    `;
const H1 = styled.h1`
    color: white;
    font-weight: 900;
    margin-bottom: 10px;
    @media (max-width: 950px) {
        font-size: 25px;
    }
    @media (min-width: 1000px) {
        font-size: 30px;
    }
    position: relative;
    `;
const Button = styled.button`
    padding: 10px 10px 5px;
    background-color: red;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    text-align: center;
    font-size: 14px;
    font-weight: bolder;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #bd0000;
    }
    `;
const StyledSwiper = styled(Swiper)`
    .swiper-button-next,
    .swiper-button-prev {
        background-color: rgb(26, 26, 26);
        border-radius: 10px;
        padding: 70px 20px;
        color: white;
        font-size: 1px !important;
        top: 24%;
        z-index: 10;
    }
    .swiper-button-next {
        right: 10px; /* Posiciona fora do container */
    }
    .swiper-button-prev {
        left: 10px; /* Posiciona fora do container */
    }
    .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.5); /* Cor padrão dos bullets */
        opacity: 1; /* Opacidade dos bullets */
    }
    .swiper-pagination-bullet-active {
        background: red; /* Cor do bullet ativo */
    }
    .swiper-pagination {
        bottom: 30px; /* Ajuste para uma posição mais alta */
        text-align: center; /* Centraliza a paginação */
        z-index: 10; /* Coloca a paginação acima dos slides */
    }
    height: 400px;
    `;
const StyledSwiperSlide = styled(SwiperSlide)`
    overflow: hidden;
    `;

// Estilos do Modal
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    `;
const ModalContent = styled.div`
    background-color: rgba(20, 20, 20);
    padding: 50px;
    border-radius: 8px;
    width: 80%;
    min-width: 600px;
    max-width: 800px;
    text-align: center;
    transform: ${({ show }) => (show ? 'scale(1)' : 'scale(0.8)')};
    transition: transform 0.4s ease; /* Transição para a escala */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    `;
const CloseButton = styled.button`
    background-color: transparent;
    position: absolute;
    color: white;
    border: none;
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 35px;
    top: 15px;
    right: 15px;
    `;
const Img = styled.img`
    width: 300px;
    border-radius: 10px;
    @media (max-width: 950px) {
        width: 250px;
    }
    `
const P = styled.p`
    font-size: 20px;
    text-align: justify;
    @media (max-width: 950px) {
        font-size: 17px;
    }
    `
const DivModal = styled.div`
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    display: flex;
    @media (max-width: 950px) {
        flex-direction: column;
    }
    @media (min-width: 1000px) {
    }
`;
const SubDivModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;

const moviesURL = import.meta.env.VITE_API; // Movies URL
const searchURL = import.meta.env.VITE_SEARCH; // Search URL
const apiKey = import.meta.env.VITE_API_KEY; // API Key
const imageUrl = import.meta.env.VITE_IMG; // Imagens

const MovieAPI = () => {
    const [ movieResults, setMovieResults ] = useState([]); // Movie results (both initial and search)
    const [ comedyMovieResults, setComedyMovieResults ] = useState([]); // Movie results (both initial and search)
    const [ actionMovieResults, setActionMovieResults ] = useState([]); // Movie results (both initial and search)

    const [ searchQuery, setSearchQuery ] = useState(""); // Search query input

    const [ loading, setLoading ] = useState(false); // Loading state
    const [ loadingComedy, setLoadingComedy ] = useState(false); // Loading state

    const [ slidePerView, setSlidePerView ] = useState(4.5);
    const [ slidePerGroup, setSlidePerGroup ] = useState(4);

    const [ showModal, setShowModal ] = useState(false); // Estado para controlar o modal
    const [ selectedMovie, setSelectedMovie ] = useState(null); // Adicione isso para armazenar o filme selecionado

    // Funções de fetch...
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); // Define o filme selecionado
        setShowModal(true); // Abre o modal
    };

    const handleCloseModal = () => {
        setShowModal(false); // Fecha o modal
        setSelectedMovie(null); // Limpa o filme selecionado
    };

    // Fetch movies from the API (for both top-rated and search)
    const getMovies = async (url) => {
        setLoading(true); // Set loading to true before fetching
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setMovieResults(data.results || []); // Update movie results with fetched data
        } catch (error) {
            console.error("Erro ao puxar dados da API: " + error);
        } finally {
            setLoading(false); // Set loading to false after fetching is done
        }
    };
    const getComedyMovies = async (url) => {
        setLoadingComedy(true); // Set loading to true before fetching
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setComedyMovieResults(data.results || []); // Update movie results with fetched data
        } catch (error) {
            console.error("Erro ao puxar dados da API: " + error);
        } finally {
            setLoadingComedy(false); // Set loading to false after fetching is done
        }
    };
    const getActionMovies = async (url) => {
        setLoadingComedy(true); // Set loading to true before fetching
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setActionMovieResults(data.results || []); // Update movie results with fetched data
        } catch (error) {
            console.error("Erro ao puxar dados da API: " + error);
        } finally {
            setLoadingComedy(false); // Set loading to false after fetching is done
        }
    };

    // Fetch top-rated movies when the component mounts
    useEffect(() => {
        const movieWithURL = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
        const comedyMovieWithURL = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=35&language=pt-BR`;
        const actionMovieWithURL = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=28&language=pt-BR`;
        getMovies(movieWithURL);
        getComedyMovies(comedyMovieWithURL);
        getActionMovies(actionMovieWithURL);
    }, []);

    // Handle form submission for search
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery) return;

        // Search movies with the query
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${searchQuery}&language=pt-BR`;
        getMovies(searchWithQueryURL);
    };

    useEffect(() => {
        const handleSlideResize = () => {
            if (window.innerWidth < 720) {
                setSlidePerView(1.5);
                setSlidePerGroup(1);
            } else if (window.innerWidth < 950) {
                setSlidePerView(2.5);
                setSlidePerGroup(2);
            } else if (window.innerWidth < 1250) {
                setSlidePerView(3.5);
                setSlidePerGroup(3);
            } else {
                setSlidePerView(4.5);
                setSlidePerGroup(4);
            }
        };

        handleSlideResize();
        window.addEventListener("resize", handleSlideResize);

        // Cleanup: remove o eventListener quando o componente for desmontado
        return () => window.removeEventListener("resize", handleSlideResize);
    }, []);

    return (
        <Container>
            <Div>
                <H1>
                    {searchQuery
                        ? `Resultados da busca: ${searchQuery}`
                        : "Em alta"}
                </H1>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Pesquisar filme..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button type="submit">
                        <BiSearchAlt2 />
                    </Button>
                </Form>
            </Div>

            <StyledSwiper
                slidesPerView={slidePerView}
                slidesPerGroup={slidePerGroup} // Altere esse número para o número de slides que você deseja avançar
                pagination={{ clickable: true }}
                navigation
            >
                {loading && <p>Carregando...</p>}
                {!loading && movieResults?.length === 0 && (
                    <p>Nenhum filme encontrado.</p>
                )}
                {!loading &&
                    movieResults?.length > 0 &&
                    movieResults.map((m, index) => (
                        <StyledSwiperSlide key={`${m.id}-${index}`}>
                            <MovieCard movie={m} index={index + 1} onClick={() => handleMovieClick(m)}/>
                        </StyledSwiperSlide>
                    ))}
            </StyledSwiper>

            <H1>Top 20 Comédia</H1>
            <StyledSwiper
                slidesPerView={slidePerView}
                slidesPerGroup={slidePerGroup} // Altere esse número para o número de slides que você deseja avançar
                pagination={{ clickable: true }}
                navigation
            >
                {loadingComedy && <p>Carregando...</p>}
                {!loadingComedy && comedyMovieResults?.length === 0 && (
                    <p>Nenhum filme encontrado.</p>
                )}
                {!loadingComedy &&
                    comedyMovieResults?.length > 0 &&
                    comedyMovieResults.map((m, index) => (
                        <StyledSwiperSlide key={`${m.id}-${index}`}>
                            <MovieCard movie={m} index={index + 1} onClick={() => handleMovieClick(m)} />
                        </StyledSwiperSlide>
                    ))}
            </StyledSwiper>

            <H1>Top 20 Ação</H1>
            <StyledSwiper
                slidesPerView={slidePerView}
                slidesPerGroup={slidePerGroup} // Altere esse número para o número de slides que você deseja avançar
                pagination={{ clickable: true }}
                navigation
            >
                {loadingComedy && <p>Carregando...</p>}
                {!loadingComedy && actionMovieResults?.length === 0 && (
                    <p>Nenhum filme encontrado.</p>
                )}
                {!loadingComedy &&
                    actionMovieResults?.length > 0 &&
                    actionMovieResults.map((m, index) => (
                        <StyledSwiperSlide key={`${m.id}-${index}`}>
                            <MovieCard movie={m} index={index + 1} onClick={() => handleMovieClick(m)}/>
                        </StyledSwiperSlide>
                    ))}
            </StyledSwiper>

            {/* Modal para exibir informações do filme */}
            {showModal && (
                <ModalContainer>
                    <ModalContent>
                        <DivModal>
                            <SubDivModal>
                                <div>
                                <h3>{selectedMovie.title}</h3>
                                <h4>Nota: {selectedMovie.vote_average.toFixed(2)} <FaStar/></h4>
                                </div>
                                <P>Resumo: {selectedMovie.overview}</P>
                            </SubDivModal>
                            <Img src={selectedMovie.poster_path ? imageUrl + selectedMovie.poster_path : defaultImage} alt={selectedMovie.title || 'Imagem padrão'} />
                        </DivModal>
                        {/* Você pode adicionar mais informações sobre o filme aqui */}
                        <CloseButton onClick={handleCloseModal}>X</CloseButton>
                    </ModalContent>
                </ModalContainer>
            )}
        </Container>
    );
};

export default MovieAPI;
