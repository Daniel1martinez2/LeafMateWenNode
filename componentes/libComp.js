const database2 = firebase.database();

class libComp {
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






        let divIcons = document.createElement('div');
        divIcons.className = "divIcons";







        component.appendChild(plantTitle);
        component.appendChild(plantDiv);
        component.appendChild(divIcons);
        component.appendChild(infoDiv);
        circleDiv.appendChild(imgDiv);
        component.appendChild(circleDiv);



        return component;


    }








}