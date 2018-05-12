function handleSignUp(){
    //Step 1 : Get the email/passwd entered by user
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    
    //Step 2 : Validate
    if(email.length < 4) {
        alert("Please enter a valid email address");
        return;
    }
    if(password.length < 4) {
        alert("Please use a stronger password");
        return;
    }

    //Step 3 : Create a user on firebase app
    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(
                        //success
                        function() {
                            alert("user created");
                        }
                    )
                    .catch(
                        function(error) {
                            alert(error.message);
                        }
                    )

}

function handleSignIn() {

      //Step 1 : Get the email/passwd entered by user
      var email = document.getElementById('form-email').value;
      var password = document.getElementById('form-password').value;

      //Step2 : Sign them in
      firebase.auth().signInWithEmailAndPassword(email,password)
                     .then(
                         function() {
                             window.location.href="https://google.com"
                         }
                     )
                     .catch(
                         function(error){
                             alert(error.message)
                         }
                     )
}
function handleSignOut() {
    firebase.auth().signOut().then(function() {
        alert("User signed out");
      }).catch(function(error) {
        // An error happened.
        alert(error.message)
      });
}
function handleFBLogin() {
    if(! firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('displayName');
        firebase.auth().signInWithPopup(provider)
                        .then(function(result) {
                            var token = result.credential.accessToken;
                            var user = result.user;
                            console.log(user);
                            alert(user.displayName)
                            window.location.href="https://google.com";
                        })
                        .catch(function(error) {
                            // An error happened.
                            alert(error.message)
                          });
    }
    else {
        handleSignOut();
    }
}


function handlegoogleLogin() {
    if(! firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('displayName');
        firebase.auth().signInWithPopup(provider)
                        .then(function(result) {
                            var token = result.credential.accessToken;
                            var user = result.user;
                            console.log(user);
                            alert(user.displayName)
                            window.location.href="https://google.com";
                        })
                        .catch(function(error) {
                            // An error happened.
                            alert(error.message)
                          });
    }
    else {
        handleSignOut();
    }
}