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
                elem.forEach(
                  lib => {
                           
                                
                           let renderElem =  new MyGardenComp(lib.val());
                           gardenContainer.appendChild(renderElem.render());
                           bornTime = lib.val().bornTime;
                           bornDate = lib.val().bornDate;
                           newborn=bornDate+"T"+bornTime;
                           calculateAge();

                               
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
    var plantAge = dayNow - born;
    console.log(plantAge);
    
}





var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 16, 0, 0) - now;
if (millisTill10 < 0) {
     millisTill10 += 86400000; 
}
setTimeout(function(){alert("Water Plant")}, millisTill10);
setTimeout(function(){openAPage()}, millisTill10)

function openAPage() {


var gardenWin =  window.location.href= 'addPlant.html';

gardenWin.close();

}








// function nextWatering(nextWater,bornTime) {
//     (function loop() {
//         var now = new Date();
//         if (now.getDate() === 12 && now.getHours() === 12 && now.getMinutes() === 0) {
//             water();
//             alert("Water now")
//         }
//         now = new Date();                  
//         var delay = 60000 - (now % 60000); 
//         setTimeout(loop, delay);
//     })();
// }



