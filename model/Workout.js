const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        unique: true
    },


    name: {
        type: String,
        unique: true
    },

    duration: {
        type: Number,
        unique: true
    },

    weight: {
        type: Number,
        unique: true
    },
    reps: {
        type: Number,
        unique: true
    },
    sets: {
        type: Number,
        unique: true
    },


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
