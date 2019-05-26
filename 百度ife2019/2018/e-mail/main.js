var postfixList = ['163.com','gmail.com','126.com','qq.com','263.net'];
var input = document.getElementById("email-input");
var ul = document.getElementById("email-input");
var nowSelectTipIndex = 0;
input.oninput = function(e){
    if(e.keyCode != 38 || e.keyCode != 40 || e.keyCode != 13){
        removeSelect();
    }
    append();
    controlSug();
}
input.onkeydown = onKey;
ul.onclick = function(e){
    if(e.target.nodeName.toLowerCase() == 'li'){
        var text = decode(e.target.innerHTML);
        input.value = text;
        hide();
    }
    input.focus();
}