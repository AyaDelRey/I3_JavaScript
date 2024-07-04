const LOGIN = "wok"
const PASSWORD = "wokay"

let loginUser = prompt("Veuillez entrer votre login")
let passwordUser = prompt("Veuillez entrer votre password")

const NBR_ESSAI = 3
let compteur = 1

while(compteur <= NBR_ESSAI && LOGIN !== loginUser && PASSWORD !== passwordUser){
    console.log(compteur)
    compteur++

    alert("Login ou password incorrect")
    loginUser = prompt("Veuillez entrer votre login")
    passwordUser = prompt("Veuillez entrer votre password")
    console.log(compteur)
}

if(compteur >= 3){
    alert("Vous ne pouvez pas vous connecter")
}
else{
    alert("Bienvenue sur le site !")
}