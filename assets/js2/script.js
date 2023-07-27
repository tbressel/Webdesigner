/*
---------------------------------------------------------------------
GESTION DU BOUTON QUI FERME LA VIDEO ET L'AUDIO CI CELUI CI EST ACTIF
---------------------------------------------------------------------
*/
// On récupère dans une constante l'élément sur lequel on va cliquer
const ELEMENT__close = document.getElementById('cross');
console.log("Je récupère l'élément cliquable :",ELEMENT__close);

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
console.log("je récupère ",ELEMENT__cart);


ELEMENT__cart.addEventListener("click", () => {
    console.log("j'ai cliqué sur le caddie, je suis donc rentré dans ma fonction");

    const ELEMENT__number = document.getElementById("nbr_count").innerText;
    console.log(ELEMENT__number);
    

// on convetire une string en integer
    let number = parseInt(ELEMENT__number) + 1;
    console.log("çà fait",number);
    
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

