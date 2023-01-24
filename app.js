var btnTranslate = document.querySelector("#btn-translate");//hey browser, query this id #
btnTranslate.addEventListener("click",clickHandler); //on that id, add a listner click, and if clicked, call function to show in console that it was clicked

function clickHandler(){
    console.log("clicked");
}

