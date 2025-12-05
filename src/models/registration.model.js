import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    userEmail: { type: String, required: true },
    clubId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
      required: true,
    },
    status: {
      type: String,
      enum: ["registered", "cancelled"],
      default: "registered",
    },
    paymentId: { type: String, default: "" },
    registeredAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("EventRegistration", registrationSchema);
