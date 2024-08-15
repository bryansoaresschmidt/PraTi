function requisitar(url) {
  const oak = document.getElementById("oak")

  if (!document.getElementById('pokebola')) {
    const imgPokebola = document.createElement('img');
    imgPokebola.id = 'pokebola';
    imgPokebola.src = './img/pokebola.gif';
    imgPokebola.className = 'pokebola'

    oak.appendChild(imgPokebola);
  }

  const ajax = new XMLHttpRequest();

  ajax.open("GET", url);

  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
      oak.innerHTML = ajax.responseText;
    }
    if (ajax.readyState === 4 && ajax.status === 404) {
      oak.innerHTML = "Requisição foi finalizada porém o recurso não foi finalizado. Erro 404.";
    }
  };
  setTimeout(() => {
    ajax.send();
  }, 2000);
}
