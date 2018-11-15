$(document).ready(function() {
   let mainMng = new Manager();
   //mainMng.init();

   // button-addon2
   $("#button-addon2").click(function() {
      document.getElementById("tst").value = mainMng.getTst();
      //mainMng.getStr1();
   });

   $("#loginBtn").click(function() {
      function googleLogin() {
         const provider = new firebase.auth.GoogleAuthProvider();
         //document.getElementById("loginbtn").onclick = null;
         firebase.auth().signInWithPopup(provider).then(result => {
            // Show user information
            const user = result.user;
            console.log(user);
            // Change card
            /*document.getElementById("userName").textContent = user.displayName;
            document.getElementById("emailAdress").textContent = user.email;*/
            document.getElementById("googlePic").src = user.photoURL;

         }).catch(function(error) {
            // Handle Errors
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // Show error
            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);
            alert(errorMessage);
            //document.getElementById("accountLogo").onclick = googleLogin; //reactive le btn en cas d'err
         });
      }
   });
});
