import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    clubId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "expired", "pendingPayment"],
      default: "pendingPayment",
    },
    paymentId: { type: String, default: "" }, // Stripe payment ID or reference
    joinedAt: { type: Date, default: Date.now },
    expiresAt: { type: Date }, // optional
  },
  { timestamps: true }
);

export default mongoose.model("Membership", membershipSchema);
