// Texto tipo maquina de escribir
const typed = new Typed('.typed', { 
  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
});


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



//Tamaño pantalla para controlar el efecto de movimiento en servicios
function tamano() {
  //console.log(document.documentElement.clientWidth);
  if(document.documentElement.clientWidth > 500) {
    VanillaTilt.init(document.querySelectorAll("#servicios .fila .servicio"), {
      max: 15,
      speed: 200,
      glare: true,
      "max-glare": 1,
    });
  }
  else{
    VanillaTilt.init(document.querySelectorAll("#servicios .fila .servicio"), {
      max: 3,
      speed: 50,
      glare: true,
      "max-glare": 1,
    });
  }
}

//moon y sun
const btnSwitch = document.querySelector("#switch")
btnSwitch.addEventListener("click",() =>{
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("switch");
});


