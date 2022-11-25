const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DestinationsSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function(input) {
              return input.length >= 1;
            },
            "Title should be longer."
          ]
    },
    destinations: {
      type: String,
      trim: true,
    },
    start: Date,
    end: Date,
    description: String,
    created: {
      type: Date,
      default: Date.now
    },
    lastUpdate:Date,
    login: {
      type: Schema.Types.ObjectId,
      ref: "login"
    },
    guests: [{
      type: Schema.Types.ObjectId,
      ref: "login"
    }],
    allDay: {
      type: Boolean,
      default: true
    }
});

// Custom method `lastUpdatedDate`
DestinationsSchema.methods.lastUpdatedDate = function() {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};d
const Destinations = mongoose.model("", DestinationsSchema);

module.exports = Destinations;
// const destinationsController = require("../../controllers/destinations")


// router
//     .route("/")
//     .get(destinationsController.getAllDestinations)
//     .post(destinationsController.createDestinations);

// router
//     .route("/:id")
//     .get(destinationssController.getOneDestinations);