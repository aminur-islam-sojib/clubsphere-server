import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ["membership", "event"], required: true },
    clubId: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    stripePaymentIntentId: { type: String, required: true },
    status: {
      type: String,
      enum: ["succeeded", "failed", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
