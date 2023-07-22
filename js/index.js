"use strict";

(() => {
  //Documento ciudades de js que consta de:
  //Menu
  //Slider completo (imagen y texto)
  //Fila de puntos

  // Menu hamburguesa
  //Cuando hago CLICK en el Header-button hace una FUNCIÖN
  //El Header-nav le TOGGLE de la clase isActive

  //constantes para ejecutar la interacción de abrir y cerrar el menú.
  const headerButton = document.querySelector(`.Header-button`);
  const headerNav = document.querySelector(`.Header-nav`);

  console.log(headerButton);
  console.log(headerNav);

  headerButton.addEventListener(`click`, () => {
    //Se utiliza la classlist toggle para abrir y cerrar con el mismo evento "clcik"
    headerNav.classList.toggle(`isActive`);
    headerButton.classList.toggle(`isActive`);
  });

  //Slider imagenes más título imagenes. (div)
  //constantes para mover el slider (arrows / diapositiva / puntos)
  const sliderNext = document.querySelector(`.Slider-next`);
  const sliderPrev = document.querySelector(`.Slider-prev`);
  // const sliderImgList   = document.querySelectorAll (`.Slider-img`);
  const sliderDiapoList = document.querySelectorAll(`.Slider-diapositiva`);
  //Se utiliza la constante dispositiva para que el cambio del slider sea el div completo y no solo las imagenes
  const sliderPointList = document.querySelectorAll(`.Slider-point`);

  console.log(sliderNext);
  console.log(sliderPrev);
  // console.log(sliderImgList);
  console.log(sliderDiapoList);
  console.log(sliderPointList);

  let sliderActive = 0;
  // let sliderCounter = sliderImgList.length;  // el largo del listado de imagenes
  let sliderCounter = sliderDiapoList.length;

  // Cuando hago CLICK en el BOTON (slidernext) hace una FUNCION
  //     sliderActive ++ (la flecha aumenta en +1 en cada click)

  //     if.... sliderActive es MAYOR o IGUAL que 5 (funciona como límte de la suma ++ de la cant de imagenes totales)
  //     Entonces sliderAvtive es IGUAL a 0
  // TODAS las imagenes (slider-img) le REMOVE la clase isActive
  // La imagen POSICION [] sliderActive le ADD la clase isActive.

  sliderNext.addEventListener(`click`, () => {
    sliderActive++;

    // console.log(sliderActive);

    if (sliderActive >= 5) {
      sliderActive = 0;
    }
    // Se usa forEach para recorrer el div diapositivas y luego por cada elemento que sea querySelectorAll se debe hacer otros
    sliderDiapoList.forEach((eachdiapo, i) => {
      sliderDiapoList[i].classList.remove(`isActive`);
    });

    sliderDiapoList[sliderActive].classList.add(`isActive`);

    sliderPointList.forEach((eachPoint, i) => {
      sliderPointList[i].classList.remove(`isActive`);
    });

    sliderPointList[sliderActive].classList.add(`isActive`);
  });

  sliderPrev.addEventListener(`click`, () => {
    sliderActive--;

    console.log(sliderActive);

    if (sliderActive < 0) {
      sliderActive = sliderCounter - 1;
    }

    sliderDiapoList.forEach((eachimg, i) => {
      console.log(eachimg);
      sliderDiapoList[i].classList.remove(`isActive`);
    });

    sliderDiapoList[sliderActive].classList.add(`isActive`);

    sliderPointList.forEach((eachPoint, i) => {
      sliderPointList[i].classList.remove(`isActive`);
    });

    sliderPointList[sliderActive].classList.add(`isActive`);
  });

  sliderPointList.forEach((eachpoint, i) => {
    sliderPointList[i].addEventListener(`click`, () => {
      sliderActive = i;

      sliderPointList.forEach((eachpoint, i) => {
        sliderPointList[i].classList.remove(`isActive`);
      });
      sliderPointList[sliderActive].classList.add(`isActive`);

      sliderPointList[sliderActive].classList.add(`isActive`);
    });
  });

  console.log(sliderPointList);
})();
