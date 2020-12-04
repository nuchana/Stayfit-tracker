const router = require("express").Router();
const Workout = require("../models");

// create workout ID
router.post("/api/workouts", function (req, res) {
  // Workout.create(req.body)
  Workout.create({})
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
    
});

// GET route for getting workouts
router.get("/api/workouts", function (req, res) {

  Workout.find()
    .then(function (dbWorkout) {
      res.json(dbWorkout);
    });
});

// Get route for retrieving a sepecific workout 

router.put("/api/workouts/:id", function ({ body, params }, res) {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then(function (dbWorkout) {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.put("/api/workouts/:id", function (req, res) {
//   Workout.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function (dbWorkout) {
//     console.log(dbWorkout);
//     res.json(dbWorkout);
//   });
// });

// PUT route for updating posts
// router.put("/api/workouts", function (req, res) {
//   Workout.update(
//     req.body,
//     {
//       where: {
//         id: req.body.id
//       }
//     }).then(function (dbWorkout) {
//       res.json(dbWorkout);
//     });
// });


// DELETE route for deleting posts
router.delete("/api/workouts/:id", function (req, res) {
  Workout.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbWorkout) {
    res.json(dbWorkout);
  });
});


router.get("/api/workouts/range", (req, res) => {

  Workout.find({}).limit(7)
    .then(dbWorkout => {
      console.log("ALL WORKOUTS");
      console.log(dbWorkout);

      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });

});

module.exports = router;