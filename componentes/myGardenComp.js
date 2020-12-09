
const database2 = firebase.database();



class MyGardenComp{
    constructor(plant){
        this.plant = plant; 
    }
   



render = () => {



    let component = document.createElement('div');
    component.className = "comp";

    let plantTitle = document.createElement('p');
    plantTitle.className = "plantTitle"
    plantTitle.innerHTML = this.plant.name;

    let plantDiv = document.createElement('p');
    plantDiv.classList.add("plantDiv");
    plantDiv.innerHTML = this.plant.bornDate;

    const contentInfo = document.createElement('div'); 
    contentInfo.classList.add('plant-content-info'); 


    let infoDiv = document.createElement('div');
    infoDiv.classList.add("infoDiv");
    infoDiv.innerHTML=(
        ` <div class="svg-water"></div>` +
        this.plant.nextWatter+
        ` <div class="svg-sun"></div>` +
        this.plant.sunLight
        
    
    );

    let waterBtn = document.createElement('button');
    waterBtn.classList.add("waterBtn");
    waterBtn.innerHTML = "Water Plant";

    waterBtn.addEventListener('click',()=>{
        const d=new Date();
        const hr = d.getHours();
        const min = d.getMinutes();
        let actualTime = hr+":"+min+":00"
        database2.ref(`GardenPlants/${this.plant.userId}/${this.plant.id}/bornTime`).set(actualTime);
        
    });







    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = "X";


    let nextWatering = document.createElement('p');
    nextWatering.classList.add("nextWatering");
    nextWatering.innerHTML = "Next Watering";

    let buttonsDiv = document.createElement('div');
    buttonsDiv.className = "buttonsDiv";



    let circleDiv = document.createElement('div');
    circleDiv.className = "circleDiv";

    let imgDiv = document.createElement('div');
    imgDiv.className = "imgDiv";

    switch (this.plant.name) {
        case "Blueberry":

            circleDiv.style.backgroundImage = 'url(/recursos/blueberry.png)';

            break;
        case "Kumquat":

            circleDiv.style.backgroundImage = 'url(/recursos/kumquat.png)';

            break;

        case "Lime":

            circleDiv.style.backgroundImage = 'url(/recursos/lime.png)';

            break;
        case "Strawberry":

            circleDiv.style.backgroundImage = 'url(/recursos/strawberry.png)';

            break;
        case "Chamomille":

            circleDiv.style.backgroundImage = 'url(/recursos/manzanilla.png)';

            break;
        case "Cilantro":

            circleDiv.style.backgroundImage = 'url(/recursos/cilantro.png)';

            break;
        case "Mint":

            circleDiv.style.backgroundImage = 'url(/recursos/mint.png)';

            break;
        case "Rosemary":

            circleDiv.style.backgroundImage = 'url(/recursos/rosemary.png)';

            break;
        case "Cabbage":

            circleDiv.style.backgroundImage = 'url(/recursos/cabbage.png)';

            break;
        case "Carrot":

            circleDiv.style.backgroundImage = 'url(/recursos/carrot.png)';

            break;
        case "Cauliflower":

            circleDiv.style.backgroundImage = 'url(/recursos/cauliflour.png)';

            break;
        case "Red Bell Pepper":

            circleDiv.style.backgroundImage = 'url(/recursos/pimenton.png)';

            break;
    }



    deleteBtn.addEventListener('click', ()=>{
           
        database2.ref('GardenPlants/'+this.plant.userId+"/"+this.plant.id).set(null);
        console.log(this.plant.id);
        
        });
    
    // if(){

    //     component.classList.add('waterBtn');
           
    // }else{
    //     component.classList.remove('waterBtn'); 

    // } 
    
   
    
    





    buttonsDiv.appendChild(nextWatering);
    buttonsDiv.appendChild(waterBtn);
    buttonsDiv.appendChild(deleteBtn);
    contentInfo.appendChild(plantTitle);
    contentInfo.appendChild(plantDiv);
    contentInfo.appendChild(infoDiv);
    circleDiv.appendChild(imgDiv);
    contentInfo.appendChild(circleDiv);
  
    component.appendChild(contentInfo); 
    component.appendChild(buttonsDiv); 
    
   

    

    return component;


}






}


