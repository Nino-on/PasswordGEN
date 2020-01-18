var lowerCaseLetters =[ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","q","s","t","u","v","w","x","y","z",];
var upperCaseLetters =[ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","Q","S","T","T","V","W","X","Y","Z",];
var numbers =[ "0","1","2","3","4","5","6","7","8","9",];
var symbols =[ "!","@","#","$","%","^","&","*","+","~",];
//name of array
var randomOptions =[];
var askUser=0;



function lowerFunction(){
    if (document.getElementById("lowerBox").checked==true){
        console.log(document.getElementById("lowerBox").value)
        randomOptions=randomOptions.concat(lowerCaseLetters);
        console.log(randomOptions);
    } else {
        randomOptions=randomOptions.filter(function(item){
        return lowerCaseLetters.indexOf(item) === -1;
        console.log(randomOptions);
        });
    }
}
    //upper function
function upperFunction(){
    if (document.getElementById("upperBox").checked==true){
        console.log(document.getElementById("upperBox").value)
        randomOptions=randomOptions.concat(upperCaseLetters);
        console.log(randomOptions);
    } else {
        randomOptions=randomOptions.filter(function(item){
        return upperCaseLetters.indexOf(item) === -1;
        });
    }
    //numbers function
}function numbersFunction(){
    if (document.getElementById("numbersBox").checked==true){
        console.log(document.getElementById("numbersBox").value)
        randomOptions=randomOptions.concat(numbers);
        console.log(randomOptions);
    } else {
        randomOptions=randomOptions.filter(function(item){
        return numbers.indexOf(item) === -1;
        });
    }
}
    //symbols function
function symbolsFunction(){
    if (document.getElementById("symbolsBox").checked==true){
        console.log(document.getElementById("symbolsBox").value)
        randomOptions=randomOptions.concat(symbols);
        console.log(randomOptions);
    } else {
        randomOptions=randomOptions.filter(function(item){
        return symbols.indexOf(item) === -1;
        });
        console.log(randomOptions);

    }
}
    //create
function genPassword(){
    askUser=parseInt(prompt("How long do you want your password to be???"));
    console.log(askUser);
     if (isNaN(askUser)==false) {
        if(askUser<8){
            alert("It must be more than 8");
            }
        else if(askUser>128){
        alert("It must be less than 128");
        }
        else if(randomOptions.length<1){
            alert("You must select at least one Check box")
        } else {
            var endResult="";
            for (var i=0;i<askUser;i++)
            endResult=endResult+randomOptions[Math.floor(Math.random()*randomOptions.length)];
            console.log(endResult);
            document.getElementById("textField").innerText=endResult;
        }
    } else {
        alert("Lenght must be Number not a letter");
    }
}
function copyPassword(){
    if (document.getElementById("textField").value==""){
        alert("Please Generate Password first");
    }
    else{
        var copyText = document.getElementById("textField");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }
    console.log(document.getElementById("copyButton").value)
}