
var friend = ("..data/friends.js");

module.exports = function(app) {


    
app.get('/api/friends', function (req, res) {
    res.json(friend)
});




app.post("/api/friends", function(req, res) {
    //new survery user 
newFriend = req.body;
console.log(newFriend)

var bestDifference = 50;
var bestMatch = 0 

for(var i = 0;i < friend.length - 1;i++) {
    var compScore = friend[i].length;
    var totalDifference = 0;
for(var j =0; j < newFriend.length;j++) {
    var singleDifference = Math.abs(parseInt(newFriend[j]) - parseInt(compScore[j]))

    totalDifference = totalDifference + singleDifference
}
if(totalDifference < bestDifference) {
    bestDifference = totalDifference
    bestMatch = i;

}

}
res.send(friend[bestMatch]);

  
    

});//end of post

}
