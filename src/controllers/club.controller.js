import Club from "../models/club.model.js";

/**
 * Create a new club
 */
export const createClub = async (req, res) => {
  const {
    clubName,
    description,
    category,
    location,
    bannerImage,
    membershipFee,
    managerId,
  } = req.body;

  const club = await Club.create({
    clubName,
    description,
    category,
    location,
    bannerImage,
    membershipFee,
    managerId,
  });
  res.status(201).json({ message: "Club created", club });
};

/**
 * Get all clubs (with optional filter by category)
 */
export const getClubs = async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const clubs = await Club.find(filter);
  res.status(200).json(clubs);
};

/**
 * Get single club by ID
 */
export const getClubById = async (req, res) => {
  const club = await Club.findById(req.params.id);
  if (!club) return res.status(404).json({ message: "Club not found" });
  res.status(200).json(club);
};

/**
 * Update club info
 */
export const updateClub = async (req, res) => {
  const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!club) return res.status(404).json({ message: "Club not found" });
  res.status(200).json({ message: "Club updated", club });
};

/**
 * Delete a club
 */
export const deleteClub = async (req, res) => {
  const club = await Club.findByIdAndDelete(req.params.id);
  if (!club) return res.status(404).json({ message: "Club not found" });
  res.status(200).json({ message: "Club deleted" });
};
