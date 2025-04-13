function add(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");

    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "숫자가 아닙니다!";
        return;
    }
    
    result.textContent = num1 + num2;
}

function sub(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");

    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "숫자가 아닙니다!";
        return;
    }
    
    result.textContent = num1 - num2;
}

function mul(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");

    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "숫자가 아닙니다!";
        return;
    }
    
    result.textContent = num1 * num2;
}

function div(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");

    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "숫자가 아닙니다!";
        return;
    }
    
    result.textContent = num1 / num2;
}