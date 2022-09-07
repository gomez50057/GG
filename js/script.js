//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//Función que muestra el menu responsive y cierra 
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Función que cierra depues de seleccionar
function seleccionar() {
  var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//URL y barra movimiento con scroll 


const secciones = document.querySelectorAll('.seccion');
const enlaces = document.querySelectorAll('#links a');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if(entrada.isIntersecting){
      const id = '#' + entrada.target.id;
      history.pushState({}, '' , id);
      //console.log(entrada.target.id)
      enlaces.forEach(enlace => {
        enlace.classList.remove('seleccionado');
        const href = enlace.attributes.href.nodeValue;
        if(href === id){
          enlace.classList.add('seleccionado');
        }
      });
    }
  });
}, {
	rootMargin: '-45px 0px 0px 0px',
	threshold: 0.3
});

secciones.forEach(seccion => {
  observer.observe(seccion);
});


//Boton que sube 
window.onscroll = function(){
    //console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
      document.querySelector('.go-top-container').classList.add('show');
       
    }
    else{
      document.querySelector('.go-top-container').classList.remove('show');
    }
  }
   
  document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  
