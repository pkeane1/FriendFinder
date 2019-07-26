
var friend = ("..data/friends.js");

module.exports = function(app) {
    
app.get('/api/friends', function (req, res) {
    res.json(friend)

});

app.post("/api/friends", function(req, res) {
    //new survery user 
newFriend = res.body;

    for(var i = 0;i< newFriend.lenght;i++){
        newFriend[i]= parseInt(newFriend[i])
    };

    

});//end of post










}
