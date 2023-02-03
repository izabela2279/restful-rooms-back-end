import mongoose from "mongoose";

const Schema = mongoose.Schema

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: String,
      required: true,
    },
    beds: {
      type: String,
      required: true,
    },
    baths: {
      type: String,
      required: true,
    },
    guests: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
)

const Listing = mongoose.model("Listing", listingSchema)

export { Listing }