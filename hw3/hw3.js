var s = "";
var re = document.getElementById("ss");
for (let i = 0; i <= Number.MAX_SAFE_INTEGER; i++) {
    setTimeout(function () {
        var ran = Math.ceil(Math.random() * 25);
        s += String.fromCharCode(65 + ran);
        re.innerHTML = s;
    }, 400 * i);
}


function startComparison() {
    var inputt = document.getElementById("in1").value;
    if (re.includes(inputt)) {
        re = re.replease(input, '');
    }
}
