const database = firebase.database();
const garden = document.getElementById('gardenOptions');





// Lectura
database.ref('Library').on('value', function (data) {

    garden.innerHTML = '';
   

    data.forEach(
      lib => {
           
           
               lib.forEach(
                   elem => {
            
                let renderElem =  new plantComp(elem.val());
                
                garden.appendChild(renderElem.render());
                


                   }

               )
               
        }
       
    )
   

});