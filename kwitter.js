function Login()
{
Jay =  document.getElementById("text").value;

localStorage.setItem("user_name" , Jay);

window.location = "kwitter_room.html";
}