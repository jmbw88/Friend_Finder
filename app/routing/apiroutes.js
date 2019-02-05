
const friends = require("../data/friends");

module.exports = (() => {
   const apiRoutes = require("express").Router();
   apiRoutes.get("/friends", (req, res) => {
       return res.json(friends);
   });
   apiRoutes.post("/friends", (req, res) => {
       req.body.scores = req.body.scores.map(score => Number(score));
       const userScores = req.body.scores;
       let bestMatch;
       let smallestDifference;
       friends.forEach(friend => {
           const friendScores = friend.scores;
           const differences = [];
           for(let i = 0; i < userScores.length; i++) {
               differences.push(Math.abs(userScores[i] - friendScores[i]));
           }
           const result = differences.reduce((acc, curr) => {
               return acc + curr;
           }, 0);
           if(!bestMatch) {
               bestMatch = friend;
               smallestDifference = result;
           }
           else if(result < smallestDifference) {
               bestMatch = friend;
               smallestDifference = result;
           }
       });
       friends.push(req.body);
       res.json(bestMatch);
   });
   return apiRoutes;
})();
