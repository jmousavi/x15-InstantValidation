function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Show message that there is an error with the username...
  if(userEntered.length < 6){
  document.getElementById("usernameError").innerHTML="Username must be at least 6 characters long.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
else if(userEntered.indexOf(' ')>=0){
  document.getElementById("usernameError").innerHTML="Username cannont contain white spaces.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
else{
  document.getElementById("usernameError").innerHTML="";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameGroup").classList.remove("has-error");
  document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-success");
}


  //Show message that there is an error with the password...
  if(passEntered.toLowerCase() == "password"){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else if(passEntered.toLowerCase() == userEntered.toLowerCase()){
  document.getElementById("passwordError").innerHTML="Password cannot be same as username";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else if(passEntered.length < 6){
  document.getElementById("passwordError").innerHTML="Password must be at least 6 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else if(passEntered.length > 20){
  document.getElementById("passwordError").innerHTML="Password must be less then 21 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
else{
  document.getElementById("passwordError").innerHTML="";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-success");
}
}
