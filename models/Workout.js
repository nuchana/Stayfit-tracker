const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },


        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
        },

        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"

        },

        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0

        },
        sets: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        },



    }],

    totalDuration: {
        type: Number,
        default: 0,
    }


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
