var btnTranslate = document.querySelector("#btn-translate");//hey browser, query this id #
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
}

btnTranslate.addEventListener("click",clickHandler); //on that id, add a listner click, and if clicked, call function to show in console that it was clicked