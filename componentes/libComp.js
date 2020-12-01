const database2 = firebase.database();

class libComp{
    constructor(plantLib){
        this.plantLib=plantLib;
       
    }
    


    render=()=>{
    

     
        let component = document.createElement('div');
        component.className="comp";
       
         

        let plantDiv = document.createElement('div');
        plantDiv.classList.add("plantDiv"); 
        plantDiv.innerHTML= this.plantLib.Description;
        
        

      

        let divIcons=document.createElement('div');
        divIcons.className="divIcons";



               
    
        
     
        component.appendChild(plantDiv);
        component.appendChild(divIcons);
        
     

        return component;

        
    }




   


    
}