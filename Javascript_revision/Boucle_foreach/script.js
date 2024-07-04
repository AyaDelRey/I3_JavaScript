const SEMAINE = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
const div1 = document.getElementById('div1')

SEMAINE.forEach(function (jour,i) {
    {
        if(i<5){
            
            console.log((parseInt(i)+1)+"e jour de la semaine: "+jour)
            const p = document.createElement('p')
            p.innerText = (parseInt(i)+1)+"e jour de la semaine: "+jour
            div1.append(p)
            
        }
        
    }
    
});

