// Atualizador automático de notícias
/* Implemente um componente que busca automaticamente novas notícias a cada 30 segundos */

import { useState, useEffect } from "react";
import styles from "./all.module.css";

function Posts() {
  const [post, setPost] = useState(null);

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${parseInt(Math.random() * 100)}`);
    const posts = await response.json();
    setPost(posts);
  };

  useEffect(() => {
    fetchPosts();
    const intervalId = setInterval(fetchPosts, 1000);
    return () => clearInterval(intervalId); // Se a função de limpeza nunca fosse chamada, o temporizador nunca seria cancelado. Isso significa que a função fetchPosts continuaria sendo executada a cada segundo, indefinidamente.
  }, []);

  return (
    <div className={styles.division}>
      {post ? (
        <div>
          <h1>Título: {post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Carregando notícias...</p>
      )}
    </div>
  );
}

export default Posts;

// useState re-renderiza, ele atualia

// useEffect remove e adiciona ao DOM
