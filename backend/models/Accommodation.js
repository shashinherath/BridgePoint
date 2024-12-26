const AccommodationListingSchema = new mongoose.Schema({
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LocalServiceProvider",
    required: true,
  },
  address: { type: String, required: true },
  pricePerMonth: { type: Number, required: true },
  availabilityStatus: { type: Boolean, default: true },
});

module.exports = mongoose.model(
  "AccommodationListing",
  AccommodationListingSchema
);
