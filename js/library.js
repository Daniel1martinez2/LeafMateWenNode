const database = firebase.database();
const libraryDiv = document.getElementById('compPlants');





// Lectura
database.ref('Library').on('value', function (data) {

    libraryDiv.innerHTML = '';
   

    data.forEach(
      lib => {
           /* 
            let valor = lib.val();
            let renderLib = new libComp(valor);

                libraryDiv.appendChild(renderLib.render());
                */
               lib.forEach(
                   elem => {
            
                let renderElem =  new libComp(elem.val());
                libraryDiv.appendChild(renderElem.render());
                


                    console.log(elem.val())
                   }

               )
               
        }
       
    )
   

});
