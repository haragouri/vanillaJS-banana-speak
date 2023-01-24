var btnTranslate = document.querySelector("#btn-translate");//hey browser, query this id #
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(){
    console.log("error occured", error);
    alert("something wrong with server");
}

function clickHandler(){
 // outputDiv.innerText = "afdgfdhdfhgdh" + txtInput.value ;


 var inputText = txtInput.value;

 fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => console.log(json))
   .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler); //on that id, add a listner click, and if clicked, call function to show in console that it was clicked