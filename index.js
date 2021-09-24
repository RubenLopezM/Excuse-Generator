var who=['The dog','A ghost','My friend','The cat']
var action=['ate','broke','stole','took']
var what=['my phone','the keys','my credit card','my homework']
var when=['this morning','five minutes before','before the class','during the weekend']


let excuseEl=document.getElementById("excuse")

 function number(){
    
    var random_number= Math.floor(Math.random()*4)
    return random_number
 }

function generarexcusa(){
    var excuse=who[number()]+' '+action[number()]+' '+what[number()]+' '+when[number()]
    excuseEl.innerHTML= excuse
}
