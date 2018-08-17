//On peut faire bouger le texte de haut en bas ou de gauche a droite ou les 2 en meme temps comme ICI
const titre = document.querySelector("h1"); //on recupere h1

const cadre = document.querySelector("div");  //on recupere div
//on defini la hauteur et la largeur
const maxHeight = cadre.clientHeight; //clientHeight hauteur interieur du cadre
const maxWidth = cadre.clientWidth;  //clientWidth largeur interieur du cadre

titre.style.position = "relative"; //position relative a son parent
let topPosition = 0;    // pour position du haut
let leftPosition = 0;   //position de gauche
let forceHeight = -2;   // deplacement de 2 px en hauteur
let forceWidth = -2;    // deplacement de 2 px en largeur

//
function animation(){  
    //condition pour aller de bas en haut
    if (topPosition == 0){ //en haut
        forceHeight *= -1; //la forceHeight devient positif , change de sens
        titre.style.color = "rgb(38, 35, 240)";
        titre.style.background = "white";
        titre.textContent = "Joyeux";
    }else if (topPosition == maxHeight - titre.offsetHeight){ //hauteur du cadre maxHeight - taille exterieur du titre :offsetHeight 
                                                            //sinon objet depasse du cadre
               forceHeight *= -1; //idem que if
               titre.style.color = "white";
               titre.style.background = "rgb(38, 35, 240)"
               titre.textContent = "Anniversaire"
    }
    //condition pour aller de gauche a droite
    if (leftPosition == 0){
        forceWidth *= -1;
    }else if (leftPosition == maxWidth - titre.offsetWidth){
        forceWidth *= -1;
    }
    topPosition += forceHeight; //pour qu'il se deplace de 2px : forceHeight pixel
    leftPosition += forceWidth;
    

    titre.style.top = topPosition + "px"; //on donne la valeur au titre
    titre.style.left = leftPosition + "px";
    
    //rapelle de la fonction sinon il ne fait qu'un deplacement de 2px ...boucle
    requestAnimationFrame(animation);
}
//fonction JS qui permet de lancer fonction animation  toutes les 60s
requestAnimationFrame(animation);