function obtenerDatos() {
    let url = 'https://restcountries.com/v3.1/all'
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        
        
        dibujar(resultado)

      });
  };
  
 
  function dibujar(paises) {

    let nombrePais = document.getElementById('lstPaises')
    
   
    paises.forEach((pais) => {
       
        nombrePais.innerHTML += `<li><a class="dropdown-item" id="btnPais" href="#">${pais.name.common}</a></li> `
    });

  };    
  
  const lstpaises = document.querySelector("#lstpaises");
  obtenerDatos();
 


    