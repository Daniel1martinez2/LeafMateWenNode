const plantBtn = document.getElementById('plantBtn')
const inputName = document.getElementById('inputPlant')
const cancelBtn = document.getElementById('cancelBtn')
const garden = document.getElementById('gardenOptions');
const database = firebase.database();
let fecha;
let time;
var seleccionado;


plantIt = () => {
    const d=new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    fecha=ye+mo+da;
    time=hr+min+sec

    
    
    


    if (inputName.value === '') {
        alert("Please name the plant");
        return;
    }


    let ref = database.ref('GardenPlants').push()
    database.ref('Library').once('value', function (data) {
        data.forEach(
             newPlant => {
                database.ref('Library/' + newPlant.val().Name).set(
                    {
                bornDate: fecha,
                bornTime:time,
                id: referencia.key,
                name: newPlant.val().Name,
                nextWatter:newPlant.val().Watering,
                sunLight: newPlant.val().Sunlight,
                description:newPlant.val().Description,
                userId:referencia.key,
                userName:inputName.value,
                
                
                    }
                );
                }
        )   
    });
    ref.set(newPlant);
    preguntaInput.value = '';
}






plantBtn.addEventListener('click', plantIt);

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
    let info = garden;  
    let childrens = info.children; 

    for (let index = 0; index < childrens.length; index++) {
        console.log(childrens[index].classList.contains('selected')); 
    }
    
    
});


