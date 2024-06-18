let age = parseInt(prompt("Veuillez entrer votre age:  "))
console.log(age)

if(!isNaN(age)){
    if(age>0 && age <= 25){
        console.log("Vous êtes étudiant")
    }
    else if(age > 25 &&  age < 67){
        console.log("Vous êtes un travailleur")
    }
    else if(age >= 67){
        console.log("Vous êtes à la retraite")
    }
    else{
        console.log("age invalide")
    }
}
else{
    console.log("veuillez entrer un nombre")
}

/// Login ///

const login = "johndoe@mail.com"
const password = "Test1234="

let loginUtilisateur = prompt("Veuillez entrer votre login: ")
let passwordUtilisateur = prompt("Veuillez entrer votre password: ")

if(login === loginUtilisateur && password === passwordUtilisateur){
    alert("Bienvenue sur le site")
}
else{
    alert("Le login ou le mot de passe est incorrect")
}

