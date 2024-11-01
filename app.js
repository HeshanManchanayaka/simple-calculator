function calc() {
  let number01 = new Number(document.getElementById("number01").value);
  let number02 = new Number(document.getElementById("number02").value);
  let lblOutput = document.getElementById("output");
  let op = document.getElementById("op").value;

  switch (op) {
    case "+":
      lblOutput.innerHTML = ("Answer is :")+(number01 + number02);
      console.log(number01+number02);
      break;
    case "-":
      lblOutput.innerHTML = ("Answer is :")+(number01 - number02);
      console.log(number01-number02);
      break;
    case "*":
      lblOutput.innerHTML = ("Answer is :")+(number01 * number02);
      console.log(number01*number02);
      break;
    case "/":
      lblOutput.innerHTML = ("Answer is :")+(number01 / number02);
      console.log(number01/number02);
      break;
  }
}
