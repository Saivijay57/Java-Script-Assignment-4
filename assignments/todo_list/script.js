let inputValue=document.getElementsByTagName('input')[0];
let Addtobutton=document.getElementsByTagName('button')[0];
let divtodos=document.getElementsByClassName('todos')[0];
var x=0;
Addtobutton.onclick=displayInput;
function displayInput(){
    if(inputValue.value == "" || inputValue.value==0){
        alert("invalid input")
    }
    else {
        var insidetag=document.createElement('p');
        var attri=document.createAttribute('key');
        attri.value=x;
        insidetag.setAttributeNode(attri);
        insidetag.innerHTML=inputValue.value;
        divtodos.appendChild(insidetag);
        inputValue.value="";
        x++;
        insidetag.onclick=function () {
            divtodos.removeChild(insidetag);
        }
    }
}