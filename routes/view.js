const path = require("path");
const router = require("express").Router();

// Routes
// =============================================================

  // Each of the below routes just handles the HTML page that the user gets sent to.

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports = router;
  

