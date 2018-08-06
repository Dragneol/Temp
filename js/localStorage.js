
var isSubmit = true;
function submitFunction(){


    isSubmit = true;
    window.alert("Submit successfully");
   var name = document.getElementById('playerName').value;
   var school = document.getElementById('schoolName').value;

   var obj = { 'PlayerName': name, 'SchoolName': school };

   // Put the object into storage
   localStorage.setItem('currentUser', JSON.stringify(obj));


  //alert("The form was submitted");
  //console.log("lucky");


  if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      localStorage.setItem("PlayerName",name);
      localStorage.setItem("SchoolName",school);
  } else {
      // Sorry! No Web Storage support..
      console.log("Sorry! No Web Storage support");
  }
  // document.getElementById('playerName').value = "";
  // document.getElementById('schoolName').value = "";

}
function checkSubmit(gameNum){
    if (isSubmit) {
      switch(gameNum){
        case 1: window.location.href='pongGame/playGame.html';
          break;
        case 2:  window.location.href='plappyBirdGame/playGame.html';
          break;
        case 3:  window.location.href='avoidGame/playGame.html';
          break;
        case 4:  window.location.href='square/arrange.html';
          break;
      }
      isSubmit = false;
    }
    else {
      window.alert("Please Submit !!! ");
    }
}
