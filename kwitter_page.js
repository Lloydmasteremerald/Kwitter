//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCeVrXWPhqFBhSQnrxIQ3dITI2pZLu0tAE",
      authDomain: "kwitter-c5c8b.firebaseapp.com",
      databaseURL: "https://kwitter-c5c8b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c5c8b",
      storageBucket: "kwitter-c5c8b.appspot.com",
      messagingSenderId: "138401786975",
      appId: "1:138401786975:web:1f878019d8e7700fbc7fea",
      measurementId: "G-WCLJXNJCZ5"
};

firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room");

user_name = localStorage.getItem("user_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        names = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];


                        A1 = "<h4>" + names + "<img class='user_tick' src= 'tick.png'> </h4>";
                        A2 = "<h4 class= 'message_h4'>" + message + "</h4>";
                        A3 = "<button class='btn btn-warning'id=" + firebase_message_id + "value=" + like + "onclick= 'updateLike(this.id)'>";
                        A4 = "<span class= 'glyphicon glyphicon-thumps-up'> Like :   " + like + "</span> </button><hr>";
                        Jay = A1 + A2 + A3 + A4;
                        document.getElementById("output").innerHTML += Jay;
                        //End code 
                  }
            });
      });
}
getData();


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            names: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}