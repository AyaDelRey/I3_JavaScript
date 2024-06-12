let stockEau = 3
let stockCoca = 2
let stockSprite = 0
let stockOasis = 1

let choix = prompt("Bonjour Veuillez selectionner une boisson :\n1. Eau\n2. Coca\n3. Sprite\n4. Oasis")

switch(choix){
    case "1":
        if(stockCoca>0){
            alert("Voici votre canette")
            stockCoca = stockCoca - 1
        }
        else{
            alert("Sold Out")
        }
        break
    case "2":
        if(stockEau>0){
            alert("Voici votre bouteille d'eau")
            stockEau = stockEau - 1
        }
        else{
            alert("Sold Out")
        }
        break
    case "3":
        if(stockSprite>0){
            alert("Voici votre canette")
            stockSprite = stockSprite - 1
        }
        else{
            alert("Sold Out")
        }
        break
    case "4":
        if(stockOasis>0){
            alert("Voici votre canette")
            stockOasis = stockOasis - 1
        }
        else{
            alert("Sold Out")
        }
        break
    default:
        alert("Choix non valide!")
        break
}
console.log("StockCoca", stockCoca)
console.log("StockEau", stockEau)
console.log("StockSprite", stockSprite)
console.log("StockOasis", stockOasis)