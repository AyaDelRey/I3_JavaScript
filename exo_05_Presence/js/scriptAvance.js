const boutonPresence = document.querySelectorAll(".boutonPresence")
const boutonAbsence = document.querySelectorAll(".boutonAbsence")



for (let index = 0; index < boutonPresence.length; index++) {
    boutonPresence[index].addEventListener("click",function(){
        const status = boutonPresence[index].previousElementSibling;
        boutonPresence[index].nextElementSibling.textContent = "🟥";
        boutonPresence[index].textContent = "";
        status.textContent = "Présent";
    })

}

for (let index = 0; index < boutonAbsence.length; index++) {
    boutonAbsence[index].addEventListener("click",function(){
        const status = boutonAbsence[index].previousElementSibling.previousElementSibling;
        boutonAbsence[index].previousElementSibling.textContent = "✅";
        boutonAbsence[index].textContent = "";
        status.textContent = "Absent";
    })

}

// boutonOK.forEach(element => {
//     element.children[3].addEventListener("click",function($event){
//         const status = $event.target.previousElementSibling;
//         $event.target.nextElementSibling.textContent = "🟥";
//         $event.target.textContent = "";
//         status.textContent = "Présent";
//     });
// });

// boutonOK.forEach(element => {
//     element.children[4].addEventListener("click",function($event){
//         const status = $event.target.previousElementSibling.previousElementSibling;
//         $event.target.previousElementSibling.textContent = "✅";
//         $event.target.textContent = "";
//         status.textContent = "Absent";
//     });
// });