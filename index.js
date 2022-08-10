let cents
let doc
let inputValue
       


function btnClick() {
    doc = document.getElementById("notes")
    input = document.getElementById("input")
    inputValue = "" + input.value
    inputValue = inputValue.replace(/[^\d.]/gi, "");
    cents = Math.round(inputValue * 100);

    
    document.getElementById("result").innerHTML = "Cents: " + cents;
    


    

}