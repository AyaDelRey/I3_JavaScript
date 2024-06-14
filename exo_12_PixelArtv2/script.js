const Jaune = document.querySelector(".Jaune");
const Bleu = document.querySelector(".Bleu");
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

for (let i = 0; i<Case.length;i++){
    Case[i].addEventListener("click", function(){
        Case[i].classList.toggle(couleurEnCours)
        console.log(couleurEnCours);
        console.log(Case[i]);
    })
}








