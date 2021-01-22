const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.put("/api/workouts/:id", function(req, res) {
        db.Workout.updateOne({_id: req.params.id}, { $push: {exercise:body }},
            {upsert: true, useFindandModify:false}, updatedWorkout => {
                res.json(updatedWorkout);
            })
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });
}