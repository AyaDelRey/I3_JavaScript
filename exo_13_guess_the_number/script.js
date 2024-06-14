const NBR_MYSTERE = 42
let nbrUtilisateur

while(nbrUtilisateur != NBR_MYSTERE){
    nbrUtilisateur = parseInt(prompt("Entrer votre proposition : "))
    if(NBR_MYSTERE === nbrUtilisateur){
        break
    }
    else if(NBR_MYSTERE > nbrUtilisateur){
        alert("Le nombre à trouver est plus grand !")
    }
    else{
        alert("Le nombre à trouver est plus petit !")
    }
    
}

alert("Bravo, le nombre mystère était bien le " + NBR_MYSTERE)