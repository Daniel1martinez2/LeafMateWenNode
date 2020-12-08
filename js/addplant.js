const plantBtn = document.getElementById('plantBtn')
const inputName = document.getElementById('inputPlant')
const cancelBtn = document.getElementById('cancelBtn')
const garden = document.getElementById('gardenOptions');
const database = firebase.database();
let fecha;


plantIt = () => {
    fecha=new Date();
    fechaSplit=fecha.toString().split(" ");


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
                id: referencia.key,
                nickname: inputName.value,
                type: newPlant.val().Type,
                sunlight: newPlant.val().Sunlight,
                description:newPlant.val().Description,
                name:newPlant.val().Name,
                watering:newPlant.val().Watering,
                date: fechaSplit[1]+"-"+fechaSplit[2]+"-"+fechaSplit[3],
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
    
});
