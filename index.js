
(function(){


const url ="https://restcountries.com/v3.1/all";



const $divCuerpo = document.querySelector("#divCuerpo");
const $lstContinente = document.querySelector("#lstContinente");
const $btn = document.querySelector("#btnBuscar");

const arrContinente = ["America", "Asia", "Africa", "Europa", "Oceania"];
const arrRegionEuropa = ["Southeast Europe","Eastern Europe","Northern Europe","Central Europe","Southern Europe","Western Europe"];
const arrRegionAsia = ["Western Asia","Southern Asia","Central Asia","Eastern Asia","South-Eastern Asia"];
const arrRegionAfrica = ["Middle Africa","Western Africa","Eastern Africa","Northern Africa", "Southern Africa"];
const arrRegionAmerica = ["South America","Central America","North America","Caribbean"]
const arrRegionOceania = ["Polynesia","Melanesia","Australia and New Zealand","Micronesia"]

//----Se recorre los elementos <li> y se les agrega evento "Click"
//----el cual renderiza el texto del continente clickeado

        
function getInfo(continente){

    
//-----Se resuelve la promesa devolviendo el Json de todos los paises
  return Promise.resolve(
    fetch(url)
        .then(res=>{           
            return res.json()           
        })
    )


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
             console.log(arrPoblacion);
//-----Se guarda el total de la suma de todos los datos de poblacion en "arrPoblacion"             
             let totalP = arrPoblacion.reduce((a, b)=>{
                return a + b;
             })
//-----Se imprime en consola en total
             console.log(totalP);  
        })

        
        .catch(err=>console.log(err))
        
        
    };
    

    
    
    
    /*let elArr = []
    let testTTT = getInfo().then(res=>{

        const result = fetch(url)
       
        const subregionAll = res.map(e=> e.subregion);
        
        const subregionFiltrado = new Set(subregionAll);
        return Array.from(subregionFiltrado);

    }).then(e => {

         for (let index = 0; index < e.length; index++) {
            elArr.push(e[index])
              
         }   
    })
    
    testTTT.then(()=>{
        console.log(elArr[0]);
    })
    
    
   console.log(typeof(testTTT));
    console.log(elArr);*/

   
    
    
    // getInfo("Eastern Europe");
    // getInfo("Northern Europe");
    // getInfo("Western Europe");

    // getInfo("Eastern Asia");
    // getInfo("Southern Asia");
    // getInfo("Central Asia");
    // getInfo("Western Asia");
    // getInfo("South-Eastern Asia");
    

    // getInfo("South America");
    // getInfo("North America");
    // getInfo("Central America");

    // getInfo("Caribbean");
    // getInfo("Australia and New Zealand");
    // getInfo("Melanesia");

    // getInfo("Eastern Africa");
    // getInfo("Western Africa");
    // getInfo("Northern Africa");
    // getInfo("Southern Africa");


const ctx = document.querySelector("#poblacionChrt");
 
/*
let myChart = function (label, data) {

     new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
    
}*/


let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
    
    $lstContinente.childNodes.forEach((e)=>{
        e.addEventListener("click", (e)=>{
            $divCuerpo.innerHTML = `<h1>${e.target.innerText}</h1>`
            
            if (e.target.innerText== arrContinente[0]) {
                getInfo("Southern Europe");
                myChart.data.labels= arrRegionAmerica;
                console.log(myChart.data.labels);
                
                
            }else if (e.target.innerText== arrContinente[1]) {
                myChart.data.labels= arrRegionAsia;
            }else if (e.target.innerText== arrContinente[2]) {
                myChart.data.labels= arrRegionAfrica;
            }else if (e.target.innerText== arrContinente[3]) {
                myChart.data.labels= arrRegionEuropa;
            }else if (e.target.innerText== arrContinente[4]) {
                myChart.data.labels= arrRegionOceania;
            }
            
            myChart.update();
        });
    });



/*
//--- Ejercicio
    const arrObj =[
    {
        nom : "Jona",
        edad: 37
    },

    {
        nom : "Eve",
        edad : 43
    },

    {
        nom : "Lucy",
        edad : 11
    },

    {
        nom : "Jona",
        edad : 78
    },
    {
        nom : "Eve",
        edad : 22
    }
];


let resultado = arrObj.map(e=> e.nom)

//console.log(resultado);

const final = new Set(resultado);
console.log(final);
//let result =[final];
//console.log(result[0]);
console.log(Array.from(final));*/





})();
  
        
    
    
    




