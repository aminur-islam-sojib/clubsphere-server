import Event from "../models/event.model.js";

/**
 * Create a new event
 */
export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json({ message: "Event created", event });
};

/**
 * Get all events (optional filter by club)
 */
export const getEvents = async (req, res) => {
  const { clubId } = req.query;
  const filter = clubId ? { clubId } : {};
  const events = await Event.find(filter);
  res.status(200).json(events);
};

/**
 * Get single event by ID
 */
export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.status(200).json(event);
};

/**
 * Update event
 */
export const updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.status(200).json({ message: "Event updated", event });
};

/**
 * Delete event
 */
export const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.status(200).json({ message: "Event deleted" });
};
