function add() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const result = document.getElementById("result");

    if(isNaN(num1) || isNaN(num2)){
        result.textContent = "숫자가 아닙니다!";
        return;
    }

    result.textContent = num1 + num2;
}

document.addEventListener('keydown', function(e){
    const keyCode = e.keyCode;
    if(keyCode == 13){
        add();
    }
})