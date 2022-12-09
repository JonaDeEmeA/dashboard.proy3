
(function(){


const url ="https://restcountries.com/v3.1/all";



const $divCuerpo = document.querySelector("#divCuerpo");
const $lstContinente = document.querySelector("#lstContinente");


const arrContinente = ["America", "Asia", "Africa", "Europa", "Oceania"];


    let lstTotalRegion = []
    async function getListaSubRegion(paraLabel) {
        const res = await fetch(url);
        
        const dataPaises = await res.json();
        
        const arrAllRegion = await dataPaises.map(e=> e.subregion);
        const setRegion = new Set(arrAllRegion);
        const arrRegion= Array.from(setRegion);
        const undefinedIndex = arrRegion.indexOf(undefined);
        arrRegion.splice(undefinedIndex,1);
        console.log(arrRegion);

        
        const arrAsia = arrRegion.filter(e=> e.includes("Asia") )
        const arrAmerica = arrRegion.filter(e=> e.includes("America"))
        const arrAfrica = arrRegion.filter(e=> e.includes("Africa"))
        const arrEuropa = arrRegion.filter(e=> e.includes("Europe"))
        const arrOceania = arrRegion.filter(e=> e.includes("esia"))
        arrOceania.push("Australia and New Zealand")
        paraLabel.push(arrAmerica,arrAsia,arrAfrica,arrEuropa,arrOceania)

        
        
    }

    

    function makeArrPob(regionXContinente, paraPush) {
        
            const Pob = regionXContinente.map(e=> e.population);
            const i = Pob.reduce((a, b)=>{
            return a + b;
                
         });
         paraPush.push(i)
            
        
    }

    getListaSubRegion(lstTotalRegion);

    const pobAmerica=[];
    const pobAsia=[];
    const pobAfrica=[];
    const pobEuropa=[];
    const pobOceania=[];

   let paisesAmerica =[];
   let paisesAsia=[];
    
   async function getDatoPoblacion() {
      const res = await fetch(url);
        
        const dataPaises = await res.json();
        
        
        const sudAmerica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[0][0]);
        const centAmerica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[0][1]);
        const norAmerica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[0][2]);
        paisesAmerica.push(sudAmerica,centAmerica,norAmerica)


        const westAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][0]);
        const southAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][1]);
        const centAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][2]);
        const eastAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][3]);
        const southCentAsia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[1][4]);

        const midAfrica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[2][0]);
        const westAfrica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[2][1]);
        const eastAfrica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[2][2]);
        const northAfrica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[2][3]);
        const southAfrica = await dataPaises.filter(e=> e.subregion == lstTotalRegion[2][4]);

        const seEuropa = await dataPaises.filter(e=> e.subregion == lstTotalRegion[3][0]);
        const eastEuropa = await dataPaises.filter(e=> e.subregion == lstTotalRegion[3][1]);
        const northEuropa = await dataPaises.filter(e=> e.subregion == lstTotalRegion[3][2]);
        const centEuropa = await dataPaises.filter(e=> e.subregion == lstTotalRegion[3][3]);
        const southEuropa = await dataPaises.filter(e=> e.subregion == lstTotalRegion[3][4]);
        const westEuropa = await dataPaises.filter(e=> e.subregion == lstTotalRegion[3][5]);
        
        const micronesia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[4][0]);
        const melanesia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[4][1]);
        const polinesia = await dataPaises.filter(e=> e.subregion == lstTotalRegion[4][2]);
        const austYNewZ = await dataPaises.filter(e=> e.subregion == lstTotalRegion[4][3]);
        
        makeArrPob(sudAmerica, pobAmerica);
        makeArrPob(centAmerica, pobAmerica);
        makeArrPob(norAmerica, pobAmerica);

        makeArrPob(westAsia, pobAsia);
        makeArrPob(southAsia, pobAsia);
        makeArrPob(centAsia, pobAsia);
        makeArrPob(eastAsia, pobAsia);
        makeArrPob(southCentAsia, pobAsia);

        makeArrPob(midAfrica, pobAfrica);
        makeArrPob(westAfrica, pobAfrica);
        makeArrPob(eastAfrica, pobAfrica);
        makeArrPob(northAfrica, pobAfrica);
        makeArrPob(southAfrica, pobAfrica);

        makeArrPob(seEuropa, pobEuropa);
        makeArrPob(eastEuropa, pobEuropa);
        makeArrPob(northEuropa, pobEuropa);
        makeArrPob(centEuropa, pobEuropa);
        makeArrPob(southEuropa, pobEuropa);
        makeArrPob(westEuropa, pobEuropa);

        makeArrPob(micronesia, pobOceania);
        makeArrPob(melanesia, pobOceania);
        makeArrPob(polinesia, pobOceania);
        makeArrPob(austYNewZ, pobOceania);
            
        };

    getDatoPoblacion();
   

    const ctx = document.querySelector("#poblacionChrt");
let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'MM de habitantes',
                data: [],
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
            maintainAspectRatio: false,
            responsive: true,
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
                myChart.data.labels = lstTotalRegion[0];
                myChart.data.datasets[0].data = pobAmerica;
            }else if (e.target.innerText== arrContinente[1]) {
                myChart.data.labels = lstTotalRegion[1];
                myChart.data.datasets[0].data = pobAsia;
            }else if (e.target.innerText== arrContinente[2]) {
                myChart.data.labels = lstTotalRegion[2];
                myChart.data.datasets[0].data = pobAfrica;
            }else if (e.target.innerText== arrContinente[3]) {
                myChart.data.labels = lstTotalRegion[3];
                myChart.data.datasets[0].data = pobEuropa;
            }else if (e.target.innerText== arrContinente[4]) {
                myChart.data.labels = lstTotalRegion[4];
                myChart.data.datasets[0].data = pobOceania;
            }


            
            myChart.update(); 
        });

        
    });


   




})();
  
        
    
    
    




