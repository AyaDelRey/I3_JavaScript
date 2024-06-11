let nbre1 = parseFloat(prompt("Veuillez entrer un premier nombre: "))
let operateur = prompt('Veuillez choisir votre opérateur entre + ; - ; * : ')
let nbre2 = parseFloat(prompt("Veuillez entrer un deuxième nombre: "))
let resultat

if(!isNaN(nbre1) && (!isNaN(nbre2))){
            if(operateur === "+"){
                resultat = nbre1 + nbre2
                
            }
            else if(operateur === "-"){
                resultat = nbre1 - nbre2
                
            }
            else if(operateur === "*"){
                resultat = nbre1 * nbre2
                
            }
            else{
                resultat = nbre1 / nbre2
                
            }
        }
    else{
        alert("Une des valeurs n'est pas un nombre")
        }

console.log(nbre1 + operateur + nbre2 + " = " + resultat)


