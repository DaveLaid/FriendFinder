
// get a reference to required module
var myModule = require('../data/friends');
// friends is a member of myModule due to the export above
var friends = myModule.friends;


module.exports = function(app) {

// Routes
// =============================================================

// Search for and show all friends - provides JSON
app.get("/api/friends", function(req, res) {
  var chosen = req.params.friends;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }

    return res.json(false);
  }
  return res.json(friends);
});



// Create New friends - takes in JSON input
app.post("/api/new", function(req, res) {
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);
  console.log(newFriend.scores);

  //Array of captured scores from new User (used to compare against other Friends)
  var newScore = newFriend.scores;
  //Total SUM of array of numbers in newScore, captured in for loop below.
  var newTotal = 0;

  for (var i = 0; i < newScore.length; i++) {
    newTotal += parseInt(newScore[i]);
  }

  console.log("NEW SCORE: " + newScore);
  console.log("NEW USER TOTAL: " + newTotal );

  
    

//
var result;
var allUserTotals = [];

  for (var i = 0; i < friends.length; i++) {
    // friends[i]
    // console.log(friends[i]);
    // console.log("Name: " + friends[i].name);
    // console.log("Photo: " + friends[i].photo);
    // console.log("TOTAL Scores: " + friends[i].scores)

    // allUserTotals = 

    // if (){
    //   result = Math.min.apply(null, newScore);

    // }
  }

  var result = newTotal;
  var oldScores = [];
  var oldTotals = 0;
  var totalDifference;

  // //LOGIC TO CHANGE NEGATIVE NUMBER TO A POSITIVE:
  for (var i = 0; i < friends.length; i++) {
    oldScores = friends[i].scores;
    oldTotals += parseInt(oldScores[i]);
  // var x = 10;
  // x -= 15;
  result -= oldTotals;
  // x = Math.abs(x);
  result = Math.abs(result);
  // document.getElementById("demo").innerHTML = x;

  }
  
  console.log("Old Scores: " + oldScores);
  console.log("Old Totals: " + oldTotals);
  console.log("RESULT PLEASE WORK!: " + result);


  //LOGIC TO COMPARE ARRAYS:
 
// var A = [2, 12, 3, 42];
// var B = [12, 42, 44, 12, 123];

// var len = Math.max(A.length, B.length);
// console.log(len)
// for (var i = 0; i < len; i++) {
//   console.log(A[i], B[i], A[i] === B[i])
// }


  


  friends.push(newFriend);

  res.json(newFriend);
});

};