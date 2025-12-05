import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "clubSphereSecret";

/**
 * Generate JWT
 */
export const generateToken = (payload, expiresIn = "1d") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

/**
 * Verify JWT
 */
export const verifyJWT = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
