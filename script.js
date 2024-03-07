document.getElementById("registrationForm").addEventListener("submit", function(event){
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // You can perform further validation here before submitting the form

  console.log("Username: " + username);
  console.log("Email: " + email);
  console.log("Password: " + password);

  // Here you can submit the form data to a server using AJAX or fetch API
});
