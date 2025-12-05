import EventRegistration from "../models/registration.model.js";

/**
 * Register user for an event
 */
export const registerEvent = async (req, res) => {
  const registration = await EventRegistration.create(req.body);
  res.status(201).json({ message: "Registered for event", registration });
};

/**
 * Get event registrations for a user
 */
export const getUserRegistrations = async (req, res) => {
  const registrations = await EventRegistration.find({
    userEmail: req.params.email,
  });
  res.status(200).json(registrations);
};
