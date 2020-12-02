const database = firebase.database(); 
const auth = firebase.auth(); 

const inputs = document.querySelectorAll('input'); 
const send = document.querySelector('button'); 

var isSignUp = false; 
auth.onAuthStateChanged(
    (user)=>{
        if(user !== null){
            if(isSignUp){
                let userD = {
                    id: user.uid,
                    mail: inputs[0].value, 
                    userName: inputs[1].value, 
                    password: inputs[2].value, 
                 }
                 database.ref('Users/'+userD.id).set(userD).then(
                     ()=>{
                         window.location.href= '#'; 
                         alert('cool'); 
                     }
                 ); 
            }else{
                window.location.href= '#'; 
            }
        }
    }
)
send.addEventListener('click',()=>{
    isSignUp = true; 
    auth.createUserWithEmailAndPassword(
        inputs[0].value, inputs[2].value
    ); 
}); 
