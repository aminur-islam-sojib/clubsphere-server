import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    clubId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
    isPaid: { type: Boolean, default: false },
    eventFee: { type: Number, default: 0 },
    maxAttendees: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
