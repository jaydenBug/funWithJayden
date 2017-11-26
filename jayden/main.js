(function(){
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var reverseOut = document.getElementById('reverseOut');
    var btnRun = document.getElementById('run');
    var brnRev = document.getElementById('reverse');

    btnRun.addEventListener('click', runMe);
    brnRev.addEventListener('click', reverseMe);    

    function runMe(){ 
        var me = input.value;       
        output.innerHTML = '<h3>' + me + '</h3>';
    }

    function reverseMe(){
        var em = reverseString(input.value);
        reverseOut.innerHTML = '<h3 style="background:red;">' + em + '</h3>';
    }

    function reverseString(str) {
        return str.split("").reverse().join("");
    }
})();