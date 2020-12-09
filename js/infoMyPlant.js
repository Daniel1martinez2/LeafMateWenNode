const plantName = document.getElementById('plantName');
const imagePlant = document.getElementById('imagePlant');
const database = firebase.database();
const auth = firebase.auth(); 







plantName.innerHTML= "hola";








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


function pintar(){
    switch (plant.getName()) {

        case "Blueberry":

            imagePlant.(R.drawable.blueberry);

            break;
        case "Kumquat":

            imagePlant.setImageResource(R.drawable.kumquat);

            break;
        case "Lime":

            imagePlant.setImageResource(R.drawable.lime);

            break;
        case "Strawberry":

            imagePlant.setImageResource(R.drawable.strawberry);

            break;


        case "Cilantro":

            imagePlant.setImageResource(R.drawable.cilantro);

            break;
        case "Mint":

            imagePlant.setImageResource(R.drawable.mint);

            break;
        case "Rosemary":

            imagePlant.setImageResource(R.drawable.rosemary);

            break;


        case "Cabbage":

            imagePlant.setImageResource(R.drawable.cabbage);

            break;


        case "Carrot":

            imagePlant.setImageResource(R.drawable.carrot);

            break;
        case "Cauliflower":

            imagePlant.setImageResource(R.drawable.cauliflour);

            break;
        case "Red Bell Pepper":

            imagePlant.setImageResource(R.drawable.pimenton);

            break;

    }
}
