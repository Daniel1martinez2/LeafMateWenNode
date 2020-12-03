const database = firebase.database();
const libraryDiv = document.getElementById('compPlants');





// Lectura
database.ref('Library').on('value', function (data) {

    libraryDiv.innerHTML = '';
   

    data.forEach(
      lib => {
           
           
               lib.forEach(
                   elem => {
            
                let renderElem =  new libComp(elem.val());
                
                libraryDiv.appendChild(renderElem.render());
                


                   }

               )
               
        }
       
    )
   

});
