
let complaintList = ["putain de bordel de dieu de merde",
"putain de bordel de gabe",
"putain de bordel de merdieu",
"bigre",
"bougre",
"diable",
"fouchtra",
"bougre de bougre",
"diantre" ,
"foutre",
"crotte de pute",
"pute borgne",
"pute borgne de bordel à queue" ,
"vingt dieux de putain de bordel de merde" ,
"vingt dieux",
"morbleu",
"ventrebleu",
"sacrebleu",
"cornegidouille",
"parbleu",
"jarnibleu",
"palsambleu",
"cristi",
"ventre saint-gris",
"par ma barbe",
"nom d'une pipe",
"sapristi",
"sacristi",
"jarnicoton",
"scrogneugneu",
"saperlotte",
"cré nom de nom",
"peste",
"diantre",
"bon Dieu",
"vertudieu",
"tonnerre de Brest",
"saperlipopette",
"jarnidieu",
"pasquedieu",
"coquin de sort",
"saloperie de merde",
"saloperie de sort", 
"sapré bon diou" ,
"sapré nom",
"seigneur", 
"seigneur dieu", 
"seigneur Jésus" , 
"tabernacle" , 
"tcheu de con" , 
"tonnerre", 
"tonnerre de dieu" , 
"tonnerre de merde"]


let generator = document.getElementById('btn-generator');
let complaint = document.getElementById('complaint');

// faire l'evenement lors d'un click
generator.addEventListener('click', generateBadMood);

function generateBadMood(event) {
    event.preventDefault();

    let  randomItem = complaintList[Math.floor(Math.random() * complaintList.length)];
    let  randomItem2 = randomItem.charAt(0).toUpperCase() + randomItem.slice(1);
    let  randomItem3 = randomItem2 + "!";

    complaint.innerHTML= randomItem3;
}