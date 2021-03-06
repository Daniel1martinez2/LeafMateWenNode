const database = firebase.database();
const auth = firebase.auth(); 
const logOut = document.querySelector('.logout'); 
const addPlantBtn = document.querySelector('.newPlantBtn');
const gardenContainer = document.querySelector('.myPlants'); 


var currentUserId; 
var nextWater;
let bornTime;
let bornDate ;
let newborn;
let splitWater;
var infoWater;
let waterState=false;
let innerwater;
var myPlantAge;




auth.onAuthStateChanged(
    (user)=>{
        if(user === null){
            window.location.href= 'Login.html';
        }else{
          database.ref('Users/'+user.uid).once('value', (data)=>{
              let userD = data.val(); 
              console.log(userD); 
              //lectura new pro 🥦
              database.ref('GardenPlants/'+userD.id).on('value', function (elem) {
                gardenContainer.innerHTML = '';
                let index = 0; 
                elem.forEach(
                    
                  lib => {      
                           let renderElem =  new MyGardenComp(lib.val());
                           gardenContainer.appendChild(renderElem.render());
                           
                           bornTime = lib.val().bornTime;
                           bornDate = lib.val().bornDate;
                           newborn=bornDate+"T"+bornTime;
                           splitWater = lib.val().nextWatter;
                           infoWater=splitWater.split(" ");
                           nWater=parseInt(infoWater[0]);
                           
                          
                           
                           ////
                           let plantName = lib.val().userName
                           const HOURS_TO_SECONDS = 60*60;
                           let waitSeconds = 2*HOURS_TO_SECONDS;





                           scheduleNotification(plantName, waitSeconds);
                            var nodes = gardenContainer.childNodes;
                            const age = nodes[index].querySelector('.plantDiv'); 
                            age.innerHTML = calculateAge(); 
                            const next = nodes[index].querySelector('.nextWatering');
                            nextWatering(next);
                            
                            const waterBtn = nodes[index].querySelector('.waterBtn'); 
                            const component = nodes[index]; 

                            if(waterState==true){
                                
                                    waterBtn.style.display="block";
                                  
                                }else{
                                    waterBtn.style.display="none";
                        
                                } 

                                waterBtn.addEventListener('click',()=>{
                                    waterState=false;

                                });
                                

                            
                            index ++; 
                    }
                   
                )
            });
          })
        } 
    }
); 



logOut.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=>{
            window.location.href= 'Login.html';
        }
    ).catch(
        (error)=>{
            alert(error.message); 
        }
    ); 
}); 

addPlantBtn.addEventListener('click', ()=>{
    window.location.href= 'addPlant.html'; 

}); 




function nextWatering(innerWater){
   
    window.setInterval(function () {
        
        var date = new Date();
        
        if ((date.getMinutes() % 1) == 0) {
    
            nWater-=1;
            if(nWater<=0){
                nWater=parseInt(infoWater[0]);
            }
            innerWater.innerHTML="Next Watering "+nWater+"h";
            
        }
    }, 36000);
    
        
     
}






function calculateAge(){
    var nowDate = new Date();
    var dayNow=nowDate.getDate();
    var bornD = new Date(newborn);
    var born = bornD.getDate();
    myPlantAge = dayNow - born;
    return  myPlantAge + " days"; 
}






function scheduleNotification(plantName, waitSeconds){
    
    var nowDate = new Date();
    var bornDate = new Date(newborn);
    var elapsedSeconds = Math.abs(nowDate.getTime() - bornDate.getTime()) / (1000);
    console.log("elapsedSeconds for " + plantName + " " + elapsedSeconds);

    const SECONDS_TO_MILLISECONDS = 1000;
    if(elapsedSeconds >= waitSeconds){
        alert("Water Plant " + plantName);
        
    }else{
        let secondsForAlert = waitSeconds - elapsedSeconds;
        setTimeout(function() {
            alert("Water Plant " + plantName);
            waterState=true;
        }, secondsForAlert * SECONDS_TO_MILLISECONDS);
        setTimeout(function(){openAPage()}, secondsForAlert * SECONDS_TO_MILLISECONDS);
    }
}



function openAPage() {


var gardenWin =  window.location.href= 'MyGarden.html';

gardenWin.close();

}





