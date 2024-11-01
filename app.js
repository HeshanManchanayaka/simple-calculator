function calc(){
    let number01=new Number(document.getElementById("number01").value);
    let number02=new Number(document.getElementById("number02").value);
    let lblOutput=document.getElementById("output");



    lblOutput.innerHTML=(number01+number02);
}