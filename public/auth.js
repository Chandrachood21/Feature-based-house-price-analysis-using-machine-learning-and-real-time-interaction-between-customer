 var firebaseConfig = {
  apiKey: "AIzaSyDp1GoA9MideUopQ2d7RDk03rJSE-0cAqc",
  authDomain: "minor-project-7b712.firebaseapp.com",
  databaseURL: "https://minor-project-7b712-default-rtdb.firebaseio.com",
  projectId: "minor-project-7b712",
  storageBucket: "minor-project-7b712.appspot.com",
  messagingSenderId: "409684465723",
  appId: "1:409684465723:web:4453d095a16133bc84a41e",
  measurementId: "G-5F8BFBQ5JR"
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
const auth = firebase.auth();
var database = firebase.database();
window.localStorage.setItem("location","null");
document.getElementById("logOpen").style.display = "block";
   document.getElementById("signOpen").style.display = "none";
   document.getElementById("main1").style.display = "none";
   document.getElementById("main2").style.display = "none";
function signUp()
{
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var mobno = document.getElementById("mobno").value;
    database.ref('users/' + uname).set({
      Name : name,
      email : email,
      mobileNumber : mobno
  })
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    alert("Registered sucessfully");
    var user = userCredential.user;
    change();
    // ...
  })
  .catch((error) => {
    alert("error");
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
function signIn()
{
    var uname = document.getElementById("unamelog").value;
    var password = document.getElementById("passwordlog").value;
    var email = document.getElementById("emaillog").value;
    alert(email);
    alert(password)
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    alert("signed in sucessfully");
    var user = userCredential.user;
    localStorage.setItem('uname',uname);
    localStorage.setItem('email',email);
    window.location="./sample.html";
    // ...
  })
  .catch((error) => {
    alert("err")
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function signOut()
{
   // auth.signOut();
    alert("Sign out sucessfully");
}
function ll()
{
   document.getElementById("logOpen").style.display = "block";
   document.getElementById("signOpen").style.display = "none";
   document.getElementById("main1").style.display = "none";
   document.getElementById("main2").style.display = "none";
}
function rr()
{
  document.getElementById("logOpen").style.display = "none";
  document.getElementById("signOpen").style.display = "block";
  document.getElementById("main1").style.display = "none";
   document.getElementById("main2").style.display = "none";
}
function change()
{
   if(document.getElementById("logOpen").style.display == "none")
   {
      document.getElementById("signOpen").style.display = "none";
      document.getElementById("logOpen").style.display = "block";
   }
  else
   {
      document.getElementById("logOpen").style.display = "none";
      document.getElementById("signOpen").style.display = "block";
   }
}