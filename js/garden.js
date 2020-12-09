const database = firebase.database();
const auth = firebase.auth(); 
const logOut = document.querySelector('.logout'); 
const addPlantBtn = document.querySelector('.newPlantBtn');
const gardenContainer = document.querySelector('.myPlants'); 


var currentUserId; 
let nextWater;
let bornTime;
let bornDate ;
let newborn;
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
                           console.log(renderElem.turnOn); 
                           ////
                           let plantName = lib.val().name
                           const HOURS_TO_SECONDS = 60*60;
                           let waitSeconds = 2*HOURS_TO_SECONDS;
                           scheduleNotification(plantName, waitSeconds);
                           //calculateAge(); 
                          // const ageTest = gardenContainer.firstChild.querySelector('.plantDiv'); 
                            var nodes = gardenContainer.childNodes;
                            const age = nodes[index].querySelector('.plantDiv'); 
                            age.innerHTML = calculateAge(); 
                          // ageTest.innerHTML =calculateAge(); 
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



function calculateAge(){
    var nowDate = new Date();
    var dayNow=nowDate.getDate();
    var bornD = new Date(newborn);
    var born = bornD.getDate();
    myPlantAge = dayNow - born;
   // console.log(myPlantAge + " days");  
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
        }, secondsForAlert * SECONDS_TO_MILLISECONDS);
        // setTimeout(function(){openAPage()});
    }
}



function openAPage() {


var gardenWin =  window.location.href= 'MyGarden.html';

gardenWin.close();

}





