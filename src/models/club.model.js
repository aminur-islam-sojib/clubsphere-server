import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    clubName: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true }, // e.g., Photography, Sports, Tech
    location: { type: String, required: true },
    bannerImage: { type: String, default: "" },
    membershipFee: { type: Number, default: 0 }, // 0 means free
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    managerEmail: { type: String, required: true }, // FK: user email
  },
  { timestamps: true }
);

export default mongoose.model("Club", clubSchema);
