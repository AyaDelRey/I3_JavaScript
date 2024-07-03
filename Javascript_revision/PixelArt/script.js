const Jaune = document.querySelector(".Jaune");
const Bleu = document.querySelector(".Bleu");
const Vert = document.querySelector(".Vert");
const Rouge = document.querySelector(".Rouge");
const Violet = document.querySelector(".Violet");
const Case = document.querySelectorAll("#case");



console.log(Case);


let couleurEnCours;

Jaune.addEventListener("click", function(){
    couleurEnCours = Jaune.textContent
    console.log(couleurEnCours);
})

Bleu.addEventListener("click", function(){
    couleurEnCours = Bleu.textContent
    console.log(couleurEnCours);
})

Rouge.addEventListener("click", function(){
    couleurEnCours = Rouge.textContent
    console.log(couleurEnCours);
})

Vert.addEventListener("click", function(){
    couleurEnCours = Vert.textContent
    console.log(couleurEnCours);
})

Violet.addEventListener("click", function(){
    couleurEnCours = Violet.textContent
    console.log(couleurEnCours);
})

for (let i = 0; i<Case.length;i++){
    Case[i].addEventListener("click", function(){
        Case[i].classList.toggle(couleurEnCours)
        console.log(couleurEnCours);
        console.log(Case[i]);
    })
}







