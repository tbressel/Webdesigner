/*
---------------------------------------------------------------------
GESTION DU BOUTON QUI FERME LA VIDEO ET L'AUDIO CI CELUI CI EST ACTIF
---------------------------------------------------------------------
*/
// On récupère dans une constante l'élément sur lequel on va cliquer
const ELEMENT__close = document.getElementById('cross');
console.log("Je récupère l'élément cliquable :", ELEMENT__close);

// On test l'élément qui doit être cliquable
ELEMENT__close.addEventListener("click", () => {
    console.log("j'ai cliqué sur la croix, je suis donc rentré dans ma fonction");

    const ELEMENT__popup = document.getElementById("popup").classList.toggle("off");
    console.log(ELEMENT__popup);

    var baliseAudio = document.getElementById("video");
    baliseAudio.pause();
});

/*
---------------------------------------------------------------------
GESTION DU BOUTON DU CADDIE QUI S'INCREMENTE
---------------------------------------------------------------------
*/
// On recupère l'élément sur lequel on veux cliquer
const ELEMENT__cart = document.getElementById("cart__circle");
console.log("je récupère ", ELEMENT__cart);


ELEMENT__cart.addEventListener("click", () => {
    console.log("j'ai cliqué sur le caddie, je suis donc rentré dans ma fonction");

    const ELEMENT__number = document.getElementById("nbr_count").innerText;
    console.log(ELEMENT__number);


    // on convetire une string en integer
    let number = parseInt(ELEMENT__number) + 1;
    console.log("çà fait", number);

    document.getElementById("nbr_count").replaceChildren(number);


    var baliseAudio = document.getElementById("audio_cart");
    baliseAudio.play();

});

/*
---------------------------------------------------------------------
GESTION DU BOUTON PLAY QUI PERMET DE LIRE LA VIDEO
---------------------------------------------------------------------
*/
const ELEMENT__play = document.getElementById("btn__play");
console.log("ELEMENT__play");


ELEMENT__play.addEventListener("click", () => {
    console.log("j'ai cliqué sur play, je suis donc rentré dans ma fonction");

    var baliseAudio = document.getElementById("video");
    baliseAudio.play();

})


/*
---------------------------------------------------------------------
GESTION DU SCROLLING QUI PERMET D'AFFICHER LES ELEMENT AU FUR ET A MESURE
---------------------------------------------------------------------
*/

/*
Récuperation des informations du scrolling de la fenêtre du navigateur
*/
const ELEMENT__scroll = document.addEventListener("scroll", () => {
    console.log('Boudiou !!! mais çà scroll çà !!');

    const ELEMENT__all = document.documentElement;
    console.log("Le Client Height est de : ",ELEMENT__all.clientHeight);
    console.log("Le Scroll Top est de : ",ELEMENT__all.scrollTop.toFixed());
    console.log("Le Scroll Height est de : ",ELEMENT__all.scrollHeight);


/* 
Récuparation des informations des objets à cibler
*/
    // let ELEMENT__objet = document.getElementById("ligne1");
    // console.log("Mon objet 1 est situé à ",ELEMENT__objet.getBoundingClientRect().top.toFixed(), "pixel du haut de la fenêtre");
    //  ELEMENT__objet = document.getElementById("ligne2");
    // console.log("Mon objet 2 est situé à ",ELEMENT__objet.getBoundingClientRect().top.toFixed(), "pixel du haut de la fenêtre");
    //  ELEMENT__objet = document.getElementById("ligne3");
    // console.log("Mon objet 3 est situé à ",ELEMENT__objet.getBoundingClientRect().top.toFixed(), "pixel du haut de la fenêtre");

    console.log('_____________________________________________');
    console.log('_____________________________________________');
    
 /* 1ère étape  : définir toutes les variables pour le calcule */

    const ELEMENT__objet = document.getElementById("scrollFX");
            console.log("L'élément à cibler est :", ELEMENT__objet);

    let TOP__object = ELEMENT__objet.getBoundingClientRect().top.toFixed(); 
            console.log("1 - Le bord haut de mon objet est situé à ",TOP__object, "pixel du haut de la fenêtre");
            console.log("    TOP__objet = ",TOP__object);
            console.log("La valeur TOP__object est de type : ",typeof(TOP__object));
            TOP__object = JSON.parse(TOP__object);
            console.log("Après transformation la valeur TOP__object est de type : ",typeof(TOP__object));
            console.log('_____________________________________________');         
            



            const DISPLAY__object = ELEMENT__all.clientHeight;
            console.log("2 - La hauteur de la fenêtre du navigateur est de : ",DISPLAY__object, "pixels de haut");
            console.log("    DISPLAY__object = ",DISPLAY__object);
            console.log("La valeur GP__objectDisplay est de type : ",typeof(DISPLAY__object));
            console.log('_____________________________________________');
            
            

            let GAP__objectDisplay = TOP__object - DISPLAY__object;
            console.log("3 - La distance que l'objet parcours pour arriver dans la zone d'apparition est de ", GAP__objectDisplay, "pixels");
            console.log("    GAP__objectDisplay = ",GAP__objectDisplay);
            console.log("La valeur GP__objectDisplay est de type : ",typeof(GAP__objectDisplay));
            console.log('_____________________________________________');
            
            
/*  2ème étape : que se passe t-il si GAP__objectDisplay est égale ou inférieur à 0 ?*/

    if (GAP__objectDisplay <= 0) {
        console.error("PAF ! on est dans la zone de l'objet à faire apparaitre");

            let ELEMENT__attributes = ELEMENT__objet.attributes;
                console.log("On récupère une Node list :", ELEMENT__attributes);
        
             ELEMENT__attributes = ELEMENT__objet.attributes.item(1).nodeValue='title2 row p-2 text-center text-white apparition';
                console.log("L'item no 1 m'interesse car il contient les class :",ELEMENT__attributes);
        
                console.log("On récupère une Node list :", ELEMENT__attributes);
        };


/*
Arrivé à 400 pixels du Top on modifie la classe de l'objet pour le faire apparaitre
Sur une fenetre qui fait une hauteur de 500 pixels 

*/




})