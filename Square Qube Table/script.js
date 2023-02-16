//Square :
function makeASquare() {
  let input = document.getElementById("input").value;
  let num1 = Math.abs(parseFloat(input));

  if (typeof (num1) == NaN) {
    alert("invalid input");
    return;
  }
  let sRes = num1 * num1;
  document.getElementById("squareResult").innerText = sRes;

  document.getElementById("qubeR").style.display = "none";
  document.getElementById("tableR").style.display = "none";
  document.getElementById("squareR").style.display = "flex";

}
//Qube :
function makeAQube() {
  let input = document.getElementById("input").value;
  let num2 = Math.abs(parseFloat(input));


  if (typeof (num2) == NaN) {
    alert("invalid input");
    return;
  }

  let qRes = num2 * num2 * num2;
  document.getElementById("qubeResult").innerText = qRes;

  document.getElementById("qubeR").style.display = "flex";
  document.getElementById("squareR").style.display = "none";
  document.getElementById("tableR").style.display = "none";

}
//Table :
function makeATable() {
  let input = document.getElementById("input").value;
  let num3 = Math.abs(parseFloat(input));

  if (typeof (num3) == NaN) {
    alert("invalid input");
    return;
  }

  let table = num3;
  let result;
  let tableRow = document.getElementById("tableResult");
  for (let i = 1; i <= 10; i++) {
    result = table * i;
    tableRow.innerHTML += "<td>" + result + "</td>";

    console.log(table + "*" + i + "=" + result);

    document.getElementById("tableR").style.display = "flex";
    document.getElementById("qubeR").style.display = "none";
    document.getElementById("squareR").style.display = "none";
  }

}