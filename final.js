function function1() {
  document.getElementById("button1").innerHTML = "Worked";
  document.getElementById("button1").onclick = function() { testNode1(); };
  console.log("Worked");
}

function function2() {

}

function testNode1() {
  console.log("Worked again");
}
