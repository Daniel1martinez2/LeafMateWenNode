const database2 = firebase.database();

class addPlantComp {
    constructor(plantLib) {
        this.plantLib = plantLib;

    }



    render = () => {



        let component = document.createElement('div');
        component.className = "comp";

        let plantTitle = document.createElement('p');
        plantTitle.className = "plantTitle"
        plantTitle.innerHTML = this.plantLib.Name;

        let plantDiv = document.createElement('p');
        plantDiv.classList.add("plantDiv");
        plantDiv.innerHTML = this.plantLib.Description;

        const contentInfo = document.createElement('div'); 
        contentInfo.classList.add('plant-content-info'); 


        let infoDiv = document.createElement('div');
        infoDiv.classList.add("infoDiv");
        infoDiv.innerHTML=(
            ` <div class="svg-water"></div>` +
            this.plantLib.Watering+
            ` <div class="svg-sun"></div>` +
            this.plantLib.Sunlight
            
        
        );

        let circleDiv = document.createElement('div');
        circleDiv.className = "circleDiv";

        let imgDiv = document.createElement('div');
        imgDiv.className = "imgDiv";

        switch (this.plantLib.Name) {
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


        component.addEventListener('click',()=>{
           //;-;-;-;-; y ahora khe porque lo de agregar-push al firebase esta en add plant, seria poner eso de alla aca?
                database2.ref('library/'+this.plantLib.Name);
                component.classList.add('selected'); 
                if(component.classList.contains('selected')){
                    alert(); 
                }
            });




        let divIcons = document.createElement('div');
        divIcons.className = "divIcons";






        
        contentInfo.appendChild(plantTitle);
        contentInfo.appendChild(plantDiv);
        //component.appendChild(divIcons);
        contentInfo.appendChild(infoDiv);
        contentInfo.appendChild(imgDiv);
        component.appendChild(contentInfo); 
        component.appendChild(circleDiv);

        

        return component;


    }








}