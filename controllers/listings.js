import { Profile } from "../models/profile.js"
import { Listing } from "../models/listing.js"

const create = async (req,res) => {
  try {
    req.body.author = req.user.profile
    const listing = await Listing.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { listings: listing } },
      { new: true }
    )
    listing.author = profile
    res.status(201).json(listing)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

export {
  create,
}