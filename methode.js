let vic = 0;
let def = 0;
let result = document.getElementById('result');
let defaite = document.getElementById('defaite');
let victoire = document.getElementById('victoire');
let valide = document.getElementById('valide');
let mots = ["pierre", "feuille", "sciseau"];

valide.addEventListener('click', function () {
    let entree = document.getElementById('entree').value;
    let alea = Math.floor(Math.random() * 3);
    let point = mots[alea];

    if(entree === "pierre" && point === "feuille") {
        result.innerText = "Choix ordi: 'feuille', vous avez perdu";
        def = def + 1;
        defaite.innerText = def;
        entree.value = "";
    } else if(entree === "pierre" && point === "sciseau") {
        result.innerText = "Choix ordi: 'sciseau', vous avez gagné";
        vic = vic + 1;
        victoire.innerText = vic;
        entree.value = "";
    } else if(entree === "pierre" && point === "pierre") {
        result.innerText = "Choix ordi: 'pierre', égalité";
        entree.value = "";
    } else if(entree === "feuille" && point === "pierre") {
        result.innerText = "Choix ordi: 'pierre', vous avez gagné";
        vic = vic + 1;
        victoire.innerText = vic;
        entree.value = "";
    } else if(entree === "feuille" && point === "sciseau") {
        result.innerText = "Choix ordi: 'sciseau', vous avez perdu";
        def = def + 1;
        defaite.innerText = def;
        entree.value = "";
    } else if(entree === "feuille" && point === "feuille") {
        result.innerText = "Choix ordi: 'feuille', égalité";
        entree.value = "";
    } else if(entree === "sciseau" && point === "pierre") {
        result.innerText = "Choix ordi: 'pierre', vous avez perdu";
        def = def + 1;
        defaite.innerText = def;
        entree.value = "";
    } else if(entree === "sciseau" && point === "feuille") {
        result.innerText = "Choix ordi: 'feuille', vous avez gagné";
        vic = vic + 1;
        victoire.innerText = vic;
        entree.value = "";
    } else if(entree === "sciseau" && point === "sciseau") {
        result.innerText = "Choix ordi: 'sciseau', égalité";
        entree.value = "";
    } else {
        result.innerText = "choix non valide, recommencer";
        entree.value = "";
    }
})