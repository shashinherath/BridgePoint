const ReviewSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LocalServiceProvider",
    required: true,
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comments: { type: String },
  reviewDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", ReviewSchema);
