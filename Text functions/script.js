function charAt() {

    let inputVal = document.getElementById("inputTxt").value;
    let outputVal = document.getElementById("outputTxt");
    let para = document.getElementById("para").innerHTML;
    let char = para.charAt(inputVal);
    if (char=="" || char==" ") 
    return alert ("character not found!");
    outputVal.innerHTML="Character at the index is:" + char;

}

function search() {

    let inputval=document.getElementById("inputTxt").value;
    let outputval=document.getElementById("outputTxt");
    let para=document.getElementById("para").innerHTML;
    let re = new RegExp(inputval,"g"); 
    let newTxt = para.replace(re, `<mark>${inputval}</mark>`);
    outputval.innerHTML = newTxt; 

}

function index() {

    let inputval=document.getElementById("inputTxt").value;
    let outputval=document.getElementById("outputTxt");
    let para=document.getElementById("para").innerHTML;
    let no=para.indexOf(inputval);
    outputval.innerHTML="Index is:" + no;

}

function length() {

    let outputval=document.getElementById("outputTxt");
    let para=document.getElementById("para").innerHTML;
    outputval.innerHTML="Length is: " + para.length;

}

function uppercase() {
    
    let outputval=document.getElementById("outputTxt");
    let para=document.getElementById("para").innerHTML;
    outputval.innerHTML = para.toUpperCase(); 

}

function lowercase() {

    let outputval=document.getElementById("outputTxt");
    let para=document.getElementById("para").innerHTML;
    outputval.innerHTML = para.toLowerCase(); 

}