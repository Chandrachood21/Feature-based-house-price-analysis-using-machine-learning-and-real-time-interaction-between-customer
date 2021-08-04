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







var nm = window.localStorage.getItem("nm");
var un = window.localStorage.getItem("un");
var cur_user = window.localStorage.getItem("uname");
var imgs,ml,rt,lcn,avail,sqfeet,size;
function pp(){
var q = database.ref('users').orderByKey();
q.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var q1 = childSnapshot;
        //console.log(q1);
        q1.forEach(function(childSnapshot){
          if(childSnapshot.val().property_name == nm && childSnapshot.val().user_name == un){
            imgs = window.localStorage.getItem("imgs");
            ml = childSnapshot.val().email;
            rt = childSnapshot.val().property_rate;
            lcn = childSnapshot.val().location;
            avail = childSnapshot.val().availability;
            sqfeet = childSnapshot.val().sq_ft;
           size = childSnapshot.val().size;
           localStorage.setItem("pmail",ml);
           ii();
        }
        })
    })
})
localStorage.setItem("pmail",ml);
}
       

        
setTimeout(function(){
    // document.getElementById("cntview").innerHTML=window.localStorage.getItem("number"); 
    pp();
},1500)
function ii()
{
    // alert(localStorage.getItem("pmail"));
    // alert(localStorage.getItem("email"));
        let vhtml = '';
         
        vhtml += '<img class="ig" id="ig1" src=';
        vhtml += imgs;
        vhtml += '></img>';

        vhtml += '<h3 id="un">';
        vhtml += un;
        vhtml += '</h3>';
       
        vhtml += '<h4 id="ml">';
        vhtml += ml;
        vhtml += '</h4>';
         
     

        vhtml += '<table border="1" ><tr> <th>property name :</th><td id="nm">';
        vhtml += nm;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property rate :</th><td id="rt">';
        vhtml += rt;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property availability :</th><td id="rt">';
        vhtml += avail;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property in square feet :</th><td id="rt">';
        vhtml += sqfeet;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property size :</th><td id="rt">';
        vhtml += size;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property location :</th><td id="lcn">';
        vhtml += lcn;
        vhtml += '</td></tr></table>';




        document.getElementById("vi").innerHTML = vhtml;
        if(un == cur_user){
        document.getElementById("myself").style.display = "block";
      }
      document.getElementById("p").style.display = "none";
 
}