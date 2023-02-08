import mongoose from "mongoose";

const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5 ],
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" } 
  },
  { timestamps: true }
)

const reservationSchema = new Schema(
  {
    dateCheckIn: {
      type: Date,
      required: true
    },
    dateCheckOut: {
      type: Date,
      required: true
    },
    guests: {
      type: Number,
      guests: [ 1, 2, 3, 4, 5, 6 ],
      required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" } 
  },
  { timestamps: true }
)

const activitySchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" } 
  },
  { timestamps: true }
)

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    beds: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    baths: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    guests: {
      type: Number,
      enum: [ 1, 2, 3, 4, 5, 6, 7, 8],
      required: true,
    },
    amenities: {
      type: String,
      enum: [ "FEZIBO Height Adjustable Electric Standing desk with Double Drawer, 48 x 24 Inch Table with Storage Shelf Sit Stand Desk with Splice Board", "ZettaGuard HDMI 3×1 switch x 2 (for switching monitors between work laptop and home setup)", "UGREEN USB switch (for switching USB inputs between work laptop and home setup)", "Acer 27 inch monitors x 3", "Logitech webcam (camera and mic)", "HeadsetAfterShokz Bluetooth headset (speaker)", "Google Home Mini pair for playing music", "Lenovo keyboard and mouse (external, wired)", "an Anker USB-C Wall Charger, Premium 60W 5-Port Desktop Charger—4 USB 3.0 + 1 USB-C on one charger", "Herman Miller embody ergonomic office chair", "Standing mat", "Phone Chargers android and apple compatible"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    reviews: [reviewSchema],
    reservations: [reservationSchema],
    activities: [activitySchema],
  },
  { timestamps: true }
)

const Listing = mongoose.model("Listing", listingSchema)

export { Listing }