var messages = document.getElementById("UL");
var textbox = document.getElementById("userBox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});