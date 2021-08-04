const firebaseConfig = {
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
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var database = firebase.database();
  var lcn;

function displayImage(un,nm, images,email,rate,lcn,numbr)
{
       let new_html = '';
       new_html += '<div class="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12" >';
       //new_html += '<a onclick="vie('+nm+')">';
       new_html += `<button onClick='vie("${nm}","${un}","${images}","${email}", "${rate}","${lcn}","${numbr}")'>`
       new_html += '<img src="'+images+'" class="img-rounded p" style="width:250px; height:250px;" alt="...">';
       new_html += '<figcaption>'
       new_html += nm;
       new_html += '</figcaption>'
       new_html += '</button>';
       new_html += '</div>';
     
       document.getElementById("recommendation").innerHTML += new_html;
}
function vie(nm,un,imgs,ml,rt,lcn,numbr){
    window.localStorage.setItem("nm",nm);
    window.localStorage.setItem("un",un);
    window.localStorage.setItem("imgs",imgs);
    window.localStorage.setItem("ml",ml);
    window.localStorage.setItem("rt",rt);
    window.localStorage.setItem("lcn",lcn);
    window.localStorage.setItem("view",1);
    window.localStorage.setItem("number",numbr);
    window.location = "./view.html"
}


function search1(lc)
{
   // lcn = document.getElementById("lcn").value;
   lcn = lc;
window.localStorage.setItem("location",lcn);
document.getElementById("recommendation").innerHTML = "";
var q = database.ref('users').orderByKey();
q.once("value").then(function(snapshot){
    var numbr = childSnapshot.val().mobileNumber;
    snapshot.forEach(function(childSnapshot){
        var q1 = childSnapshot;
        //console.log(q1);
        q1.forEach(function(childSnapshot){
            if(childSnapshot.val().location != undefined){
           if(childSnapshot.val().location == lcn){
           displayImage(childSnapshot.val().user_name,childSnapshot.val().property_name,childSnapshot.val().image_url,childSnapshot.val().email,childSnapshot.val().property_rate,childSnapshot.val().location,numbr);
           }
           if(lcn=="null")
           {
            displayImage(childSnapshot.val().user_name,childSnapshot.val().property_name,childSnapshot.val().image_url,childSnapshot.val().email,childSnapshot.val().property_rate,childSnapshot.val().location,numbr); 
           }
        }
        })
    })
})
}
function refresh()
{
    window.localStorage.setItem("location","null");
    window.location.reload()
}

var q = database.ref('users').orderByKey();
q.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var numbr = childSnapshot.val().mobileNumber;
        var q1 = childSnapshot;
        //console.log(q1);
        q1.forEach(function(childSnapshot){
          if(childSnapshot.val().location != undefined){
            if(window.localStorage.getItem("location") === childSnapshot.val().location){
           displayImage(childSnapshot.val().user_name,childSnapshot.val().property_name,childSnapshot.val().image_url,childSnapshot.val().email,childSnapshot.val().property_rate,childSnapshot.val().location,numbr);
            }
            else if(window.localStorage.getItem("location") == "null"){
                displayImage(childSnapshot.val().user_name,childSnapshot.val().property_name,childSnapshot.val().image_url,childSnapshot.val().email,childSnapshot.val().property_rate,childSnapshot.val().location,numbr);
            }
        }
        })
    })
})