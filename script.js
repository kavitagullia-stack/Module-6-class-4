function gethistory() {
return document.getElementById("history-value").innerText;
}
function printhistory(number) {
 document.getElementById("history-value").innerText=number;
}
function getoutput() {
    return document.getElementById("output-value").innerText;
}
function printoutput(number) {
    if (number == "") {
         document.getElementById("output-value").innerText=number
    }
    else {
     document.getElementById("output-value").innerText=getformattednumber(number)
    }
}
function getformattednumber(number) {
    if (number == "-") {
        return "";
    }
    var n = Number(number);
    var value = n.toLocaleString("en");
    return value;

}
function reverseformat(number) {
    return Number(number.replace(/,/g, ''));

}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printhistory("");
            printoutput("");
        }
        else if (this.id == "backspace") {
            var output = reverseformat(getoutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printoutput(output);
            }
        }
        else {
            var output = getoutput();
            var history = gethistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ?
                    output : reverseformat(output);
                history = history + output;
                if (this.id == "=") {
                     var result = eval(history);
                    printoutput(result);
                    printhistory("");

                }
                else {
                    history = history + this.id;
                    printhistory(history);
                    printoutput("");
                }
            }
        }
    })

}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        var output=reverseformat(getoutput());
        if(output!=NaN){
            output=output+this.id;
            printoutput(output);
        }
    })
}



