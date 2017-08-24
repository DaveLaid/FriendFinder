
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

  // var

  // //LOGIC TO CHANGE NEGATIVE NUMBER TO A POSITIVE:
  // var x = 10;
  // x -= 15;
  // x = Math.abs(x);
  // document.getElementById("demo").innerHTML = x;


  //LOGIC TO COMPARE ARRAYS:
 
// var A = [2, 12, 3, 42];
// var B = [12, 42, 44, 12, 123];

// var len = Math.max(A.length, B.length);
// console.log(len)
// for (var i = 0; i < len; i++) {
//   console.log(A[i], B[i], A[i] === B[i])
// }


  var totalDifference;


  friends.push(newFriend);

  res.json(newFriend);
});



  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/data/clear", function() {
  //   // Empty out the arrays of data
  //   tableData = [];
  //   waitListData = [];

  //   console.log(tableData);
  // });

};