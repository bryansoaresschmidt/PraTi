import { useEffect, useState } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>2: Dimensões da página:</h2>
      <p>A proporção da tela é: {width}x{height}px</p>
    </div>
  );
}

export default WindowSize;


// Exercício 2: Monitoramento de Largura da Janela

// Objetivo: Criar um componente que monitore e exiba a largura da janela do navegador, atualizando-se conforme a janela é redimensionada.

// Instruções:

//     Crie um componente chamado WindowSize.
//     Utilize useState para armazenar a largura atual da janela.
//     Utilize useEffect para adicionar e remover um event listener que atualiza o estado sempre que a janela é redimensionada.
//     Exiba a largura atual da janela.