
(function(){


const url ="https://restcountries.com/v3.1/all";



const $divCuerpo = document.querySelector("#divCuerpo");
const $lstContinente = document.querySelector("#lstContinente");
const $btn = document.querySelector("#btnBuscar");

const arrContinente = ["America", "Asia", "Africa", "Europa", "Oceania"];


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
    

    let lstTotalRegion = []
    async function getListaSubRegion(paraLabel) {
        const res = await fetch(url);
        
        const dataPaises = await res.json();
        
        const arrAllRegion = await dataPaises.map(e=> e.subregion);
        
        const setRegion = new Set(arrAllRegion);
        const arrRegion= Array.from(setRegion);
        const dato = arrRegion.splice(11,1);

        
        const arrAsia = arrRegion.filter(e=> e.includes("Asia"))
        const arrAmerica = arrRegion.filter(e=> e.includes("America"))
        const arrAfrica = arrRegion.filter(e=> e.includes("Africa"))
        const arrEuropa = arrRegion.filter(e=> e.includes("Europe"))
        const arrOceania = arrRegion.filter(e=> e.includes("esia"))
        arrOceania.push("Australia and New Zealand")
        paraLabel.push(arrAmerica,arrAsia,arrAfrica,arrEuropa,arrOceania)
        
    }



    getListaSubRegion(lstTotalRegion);


    /*let lstTotalPoblacion = []
    async function getListaSubRegion() {
        const res = await fetch(url);
        
        const dataPaises = await res.json();
        
        const alias = await dataPaises.filter(e=> e.subregion == lstTotalRegion[0][0]);
        
        console.log(alias);
        
        console.log(lstTotalRegion);
        
       
    }

    getListaSubRegion();*/

   let paisesAmerica =[]
   let paisesAsia=[]
    async function getDatoPoblacion() {
      const res = await fetch(url);
        
        const dataPaises = await res.json();
        
        
        const sudAmerica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[0][0]);
        const centAmerica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[0][1]);
        const norAmerica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[0][2]);
        paisesAmerica.push(sudAmerica,centAmerica,norAmerica)


        
        const westAsia = await dataPaises.filter(e=> {e.subregion == lstTotalRegion[1][0]});
        const westAsiaPob = await westAsia.map(e=> {
           return e.population;
        });
        console.log(westAsiaPob);
        const southAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][1]);
        const centAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][2]);
        const eastAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][3]);
        const southCentAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][4]);
        paisesAsia.push(westAsiaPob,southAsia,centAsia,eastAsia,southCentAsia)
        
        //console.log(lstTotalRegion);
        //console.log(lstTotalPoblacion);
    };

    getDatoPoblacion();

    
    console.log(lstTotalRegion);
        console.log(paisesAmerica);
        console.log(paisesAsia);

      

        





    const ctx = document.querySelector("#poblacionChrt");
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
    



    
//----Se recorre los elementos <li> y se les agrega evento "Click"
//----el cual renderiza el texto del continente clickeado
    $lstContinente.childNodes.forEach((e)=>{
        e.addEventListener("click", (e)=>{

            
            $divCuerpo.innerHTML = `<h1>${e.target.innerText}</h1>`
                        
//----Condicion para cada click en el "DropDown"
            if (e.target.innerText== arrContinente[0]) {
                //console.log(myChart.data.labels);
                console.log(lstTotalRegion[0]);
                myChart.data.labels = lstTotalRegion[0];
            }else if (e.target.innerText== arrContinente[1]) {
                myChart.data.labels = lstTotalRegion[1];
            }else if (e.target.innerText== arrContinente[2]) {
                myChart.data.labels = lstTotalRegion[2];
            }else if (e.target.innerText== arrContinente[3]) {
                myChart.data.labels = lstTotalRegion[3];
            }else if (e.target.innerText== arrContinente[4]) {
                myChart.data.labels = lstTotalRegion[4];
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
  
        
    
    
    




