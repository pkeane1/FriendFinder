
module.exports = function(app) {
    
app.get('/api/friends', function (req, res) {
    res.json("..data/friends.js")