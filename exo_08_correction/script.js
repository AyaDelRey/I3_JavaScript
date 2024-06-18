const CHAINE = "ma formation javascript";
const CHAINE_DEPUIS_HTML = document.getElementById("monInput");

console.dir(CHAINE_DEPUIS_HTML);
console.log(CHAINE_DEPUIS_HTML);
let chaine_recup = CHAINE_DEPUIS_HTML.value
console.log(chaine_recup);
//récup de l'indice de départ du mot 'ma'
console.log(chaine_recup.indexOf("ma"))
//récup de l'indice de départ de la lettre 'p'
console.log(chaine_recup.indexOf("p"))
//récup d'une valeur sur base d'un indice
console.log(chaine_recup.charAt(21))
//remplacer JavaScript par Java
chaine_recup = chaine_recup.replace("javascript","Java")
console.log(chaine_recup)
// Séparer les éléments d'une chaine sur base d'un délimiteur
let chaine_Array = chaine_recup.split(" ")
console.log(chaine_Array)
// Inverser la chaine de caractère
let chaineInverse = CHAINE.split("").reverse().join("")
console.log(chaineInverse)