
(function(){


const url ="https://restcountries.com/v3.1/all";



const $divCuerpo = document.querySelector("#divCuerpo");
const $lstContinente = document.querySelector("#lstContinente");
const $btn = document.querySelector("#btnBuscar");

//----Se recorre los elementos <li> y se les agrega evento "Click"
//----el cual renderiza el texto del continente clickeado
$lstContinente.childNodes.forEach((e)=>{
    e.addEventListener("click", (e)=>{
        $divCuerpo.innerHTML = `<h1>${e.target.innerText}</h1>`
    });
});

  
        
function getInfo(continente){

    
//-----Se resuelve la promesa devolviendo el Json de todos los paises
    fetch(url)
        .then(res=>{           
            let elJs = res.json()
            
            return elJs;        
        })

//-----Se resuelve la promesa creando nueva lista de Obj filtrando por
//-----el valor en la  key "subregion", que se pasa por parametro en la Funcion getInfo.       
        .then(data => { 
                       
            let newArr = data.filter(e =>{
            return e.subregion === continente
            }); 
            
            return newArr;
            
        })

//-----Se resuelve la Promesa con el la lsita de Obj por subregion        
        .then(data => {

//-----Se imprime en consola el nombre de la subregion          
            console.log(data[0].subregion);
             //console.log(data);
//-----Se crea una nueva lista con los datos de poblacion de cada pais en la subregion indicada
//-----por parametro en la Funcion getInfo
             let arrPoblacion = data.map(e => {
                return e.population;
             });
//-----Se guarda el total de la suma de todos los datos de poblacion en "arrPoblacion"             
             let totalP = arrPoblacion.reduce((a, b)=>{
                return a + b;
             })
//-----Se imprime en consola en total
             console.log(totalP);  
        })

        
        .catch(err=>console.log(err))
        
        
    };


    getInfo("Southern Europe");
    getInfo("Eastern Europe");
    getInfo("Northern Europe");
    getInfo("Western Europe");

    getInfo("Eastern Asia");
    getInfo("Southern Asia");
    getInfo("Central Asia");
    getInfo("Western Asia");
    getInfo("South-Eastern Asia");
    

    getInfo("South America");
    getInfo("North America");
    getInfo("Central America");

    getInfo("Caribbean");
    getInfo("Australia and New Zealand");
    getInfo("Melanesia");

    getInfo("Eastern Africa");
    getInfo("Western Africa");
    getInfo("Northern Africa");
    getInfo("Southern Africa");


/*--- Ejercicio
    const arrObj =[
    {
        nom : "jona",
        edad: 37
    },

    {
        nom : "Eve",
        edad : 43
    },

    {
        nom : "Lucy",
        edad : 11
    }
];

let nuevo = arrObj.filter(e => {
   return e.nom != "jona";
});*/
  
})();
  
        
    
    
    




