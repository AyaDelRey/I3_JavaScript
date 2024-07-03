let choix = prompt("Veuillez select le fruit que vous souaitez acheter : pomme, poire, kiwi, mangue")
stockPoire = 0

switch(choix){
    case "pomme" :
        console.log("le prix : 1€/kg")
        break
    case "poire" :
        if(stockPoire>0){
            console.log("le prix est de 1.10€/kg")
        }
        else{
            console.log("Ya plus de poire")
        }
        break
    case "kiwi":
        console.log("le prix est de 4.20€/kg")
        break
    case "mangue":
        console.log("le prix est de 2.00€/kg")
        break
    default:
        console.log("Ce fruit n'est pas disponible")
        break

}