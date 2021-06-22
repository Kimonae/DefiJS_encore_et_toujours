const input = document.getElementById("input") ;
document.getElementById('checkbox').addEventListener('click',
function() {
 // votre code ici
if(document.getElementById('checkbox').checked) {

input.type = "text";
document.getElementById('display').innerHTML = "Hide";


} else {


input.type = "password";
document.getElementById('display').innerHTML = "Show";

}

})


