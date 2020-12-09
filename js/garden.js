const database = firebase.database();
const auth = firebase.auth(); 
const logOut = document.querySelector('.logout'); 
const gardenContainer = document.querySelector('.garden'); 
var currentUserId; 
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
                elem.forEach(
                  lib => {
                           lib.forEach(
                               elem => {
                                console.log(elem.val()); 
                           //let renderElem =  new MyGardenComp(elem.val());
                            //gardenContainer.appendChild(renderElem.render());
                            
            
            
                               }
            
                           )
                           console.log('--------'); 
                           
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

function nextWatering(water) {
    (function loop() {
        var now = new Date();
        if (now.getDate() === 12 && now.getHours() === 12 && now.getMinutes() === 0) {
            water();
            alert("Water now")
        }
        now = new Date();                  
        var delay = 60000 - (now % 60000); 
        setTimeout(loop, delay);
    })();
}



