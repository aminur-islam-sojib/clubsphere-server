/**
 * Handle undefined routes
 */
export const notFound = (req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
};
