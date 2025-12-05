import Membership from "../models/membership.model.js";

/**
 * Create membership (after joining a club)
 */
export const createMembership = async (req, res) => {
  const { userEmail, clubId, status, paymentId, expiresAt } = req.body;

  const membership = await Membership.create({
    userEmail,
    clubId,
    status,
    paymentId,
    expiresAt,
  });
  res.status(201).json({ message: "Membership created", membership });
};

/**
 * Get memberships of a user
 */
export const getUserMemberships = async (req, res) => {
  const memberships = await Membership.find({ userEmail: req.params.email });
  res.status(200).json(memberships);
};

/**
 * Update membership status
 */
export const updateMembership = async (req, res) => {
  const membership = await Membership.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!membership)
    return res.status(404).json({ message: "Membership not found" });
  res.status(200).json({ message: "Membership updated", membership });
};
