const router = require("express").Router();
const db = require("../models");

// GET route for getting workouts
router.get("/api/workouts", function (req, res) {

  db.Workout.find()

    .then(function (dbWorkout) {
      res.json(dbWorkout);
    });
});

// Get route for retrieving a current workout
router.put("/api/workouts/:id", function (req, res) {
  db.Workout.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbWorkout) {
    console.log(dbWorkout);
    res.json(dbWorkout);
  });
});

// POST route for saving a new post
router.post("/api/workouts", function (req, res) {
  db.Workout.create(req.body).then(function (dbWorkout) {
    res.json(dbWorkout);
  });
});

// DELETE route for deleting posts
router.delete("/api/workouts/:id", function (req, res) {
  db.Workout.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbWorkout) {
    res.json(dbWorkout);
  });
});

// PUT route for updating posts
router.put("/api/workouts", function (req, res) {
  db.Workout.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
});



router.get("/api/workouts/range", (req, res) => {

  db.Workout.find({}).then(dbWorkout => {
      console.log("ALL WORKOUTS");
      console.log(dbWorkout);

      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});

module.exports = router;