import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
  gap: 20px;
`;

const Title = styled.h1`
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 20%;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 20%;

  &:hover {
    background-color: #0056b3;
  }
`;

const MovieContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  min-height: 400px;
  width: 85.9559%;
`;

const MovieCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: white;
  width: 200px;
  padding: 15px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

const MovieSearchEngine = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=403abbfe`
      ); // API KEY para que tenhamos acesso
      setMovies(response.data.Search);
    } catch (error) {
      console.error("Estamos com o erro:", error);
    }
  };

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your movie..."
      />
      <Button onClick={searchMovies}>Search</Button>
        <MovieContainer>
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: "150px", borderRadius: "5px" }}
                />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </MovieCard>
            ))}
        </MovieContainer>
    </Container>
  );
};

export default MovieSearchEngine;
