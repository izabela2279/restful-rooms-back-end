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

const index = async (req,res) => {
  try {
    const listings = await Listing.find({})
    .populate('author')
    .sort({ CreatedAt: 'desc'})
    res.status(200).json(listings)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
      const listing = await Listing.findById(req.params.id)
          .populate('author')
      res.status(200).json(listing)
  } catch (error) {
      res.status(500).json(error)
  }
}

const update = async (req,res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true}
    ).populate('author')
    res.status(200).json(listing)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteListing = async (req, res) => {
  try {
      const listing = await Listing.findByIdAndDelete(req.params.id)
      const profile = await Profile.findById(req.user.profile)
      profile.listings.remove({ _id: req.params.id})
      await profile.save()
      res.status(200).json(blog)
  } catch {
      res.status(500).json(error)
  }
}
export {
  create,
  index,
  show,
  update,
  deleteListing as delete

}