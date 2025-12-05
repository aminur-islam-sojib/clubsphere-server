import Payment from "../models/payment.model.js";

/**
 * Create payment
 */
export const createPayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.status(201).json({ message: "Payment recorded", payment });
};

/**
 * Get payments by user
 */
export const getUserPayments = async (req, res) => {
  const payments = await Payment.find({ userEmail: req.params.email });
  res.status(200).json(payments);
};
