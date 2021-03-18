var $test;
function show() {
  if ((document.getElementById("p").style.visibility = "hidden") | ($test!="visible"))
  {document.getElementById("p").style.visibility = "visible";
  $test="visible"
  }
  else
  {document.getElementById("p").style.visibility = "hidden";
  $test="hidden"}
}
