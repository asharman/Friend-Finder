let friendData = require("../data/friends");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendData);
  });

  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;
    newFriend.scores = newFriend.scores.map(score => parseInt(score));
    let totalDifference = 1000;
    let closestFriend = {};

    for (friend of friendData) {
      let difference = 0;
      for (i in friend.scores) {
        difference += Math.abs(friend.scores[i] - newFriend.scores[i]);
      }
      if (difference < totalDifference) {
        totalDifference = difference;
        closestFriend = friend;
      }
    }

    friendData.push(newFriend);

    res.json(closestFriend);
  });
};
