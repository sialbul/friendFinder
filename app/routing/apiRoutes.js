var userData = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(userData);
    });

    // add a new friend
    app.post('/api/friends', function (req, res) {

        // Capture the user input object
        var newUserData = req.body;
        // console.log('userInput = ' + JSON.stringify(userInput));
        for (var i = 0; i < newUserData.scores.length; i++) {
            newUserData.scores[i] = parseInt(newUserData.scores[i]);
        }

        var matchName = "";
        var matchImage = "";
        var minDifference = 50;

        for (var i = 0; i < userData.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < userData[i].scores.length; j++) {
                var difference = Math.abs(newUserData.scores[j] - userData[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < minDifference) {
                totalDifference = minDifference;
                matchName = userData[i].name;
                matchImage = userData[i].image;
            }
        }

        userData.push(newUserData);
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });

    });
}
