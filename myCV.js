function checkIfGood(){
    let phoneOK = document.getElementById("Telephon").checkValidity()
    let phMsg = ""
    if (phoneOK){
        phMsg = "Thank you";
    }
    else{
        phMsg = "Pattern should be XXX@XXXX.com";
    }
    document.getElementById("phoneV").innerHTML = phMsg;

    let emailOK = document.getElementById("EmailIn").checkValidity()
    let emailMsg = ""
    if (emailOK){
        emailMsg = "Thank you";
    }
    else{
        emailMsg = "lease try again";
    }
    document.getElementById("emailVM").innerHTML = emailMsg;

    if (emailOK && phoneOK){
        alert("Information OK!")
    }
}

function next(){
    alert("MazalTOV")
}

 /* Time  */

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('Clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}}