let currentSlide = 0;

function moveSlide(direction) {
    const slidesContainer = document.querySelector('.slides-container');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide += direction;

    // Impede de ir além do número de slides disponíveis
    if (currentSlide < 0) { 
        currentSlide = totalSlides - 1; // Se estiver no início e clicar em PREV vai até o final
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Se estiver no final e clicar em NEXT vai até o início
    }

    // Atualiza a posição do container dos slides
    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
    
    // if (offset === (totalSlides -1) * (-100)) { // Faz o botão NEXT desaparecer ou aparecer
    //     document.querySelector('.next').style.display = 'none';
    // } else {
    //     document.querySelector('.next').style.display = 'block';
    // }

    // if (offset === 0) { // Faz o botão NEXT desaparecer ou aparecer
    //     document.querySelector('.prev').style.display = 'none';
    // } else {
    //     document.querySelector('.prev').style.display = 'block';
    // }
}

