const TAB = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < TAB.length; i++){
    if(TAB[i]%2 === 1)
    {
        continue
    }
    console.log(TAB[i])
}

const PRODUITS = document.querySelectorAll("li")
console.log(PRODUITS)

for(const produit of PRODUITS){
    produit.addEventListener("click", function(){
        alert(`${produit.textContent}, a été ajouté au panier`)
    })
}