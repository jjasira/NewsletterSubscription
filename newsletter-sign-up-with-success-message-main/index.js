const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let myEmail = document.getElementById("femail");

  if (myEmail.value == "") {
    alert("Please enter a valid email address");
  } else {
    alert(
      `Thanks for subscribing! A confirmation email has been sent to ${myEmail.value}. Please open it and click the button inside to confirm your subscription`
    );
  }
});
