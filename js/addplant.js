const plantBtn = document.getElementById('plantBtn')
const inputName = document.getElementById('inputPlant')
const cancelBtn = document.getElementById('cancelBtn')
const garden = document.getElementById('gardenOptions');
const database = firebase.database();
const auth = firebase.auth(); 
let fecha;
let time;
var seleccionado;






plantIt = () => {

}; 


auth.onAuthStateChanged(
    (user)=>{
        if(user === null){
            window.location.href= 'Login.html';
        }else{
          database.ref('Users/'+user.uid).once('value', (data)=>{
            let userD = data.val(); 
            console.log(userD); 
            plantBtn.addEventListener('click', ()=>{

                //----->
                const d=new Date();
                const hr = d.getHours();
                const min = d.getMinutes();
                const sec = d.getSeconds();
                const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
                const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                fecha=ye+mo+da;
                time=hr+min+sec
            
                if (inputName.value.trim() === '') {
                    alert("Please name the plant");
                    return;
                }
            
                let ref = database.ref('GardenPlants/'+userD.id).push(); 
                database.ref('Library').once('value',(data)=>{
                    data.forEach(specie=>{
                        specie.forEach(kind=>{
                            if(kind.val().state){
                                let actualPlant = kind.val(); 
                                console.log(kind.val().Name); 

                                let plantCurrent ={
                                bornDate: fecha,
                                bornTime:time,
                                id: ref.key,
                                name: actualPlant.Name,
                                nextWatter:actualPlant.Watering,
                                sunLight: actualPlant.Sunlight,
                                type:actualPlant.Type,
                                userId:ref.key,
                                userName:inputName.value,
                                    }

                            
                            ref.set(plantCurrent);
            
            
                            }
                            
                        })
                    })
                }); 
                
                inputName.value = '';
                //<------
               
            }); 
          })
        } 
    }
); 




cancel = () =>{
    window.location.href = "MyGarden.html";
}

cancelBtn.addEventListener('click', cancel);
// Lectura
database.ref('Library').on('value', function (data) {
    garden.innerHTML = '';
    data.forEach(
      lib => {
               lib.forEach(
                   elem => {
                    let renderElem =  new addPlantComp(elem.val());
                    garden.appendChild(renderElem.render());
                   }

               )
               
        }
       
    )
    
});


