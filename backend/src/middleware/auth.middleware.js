export const protectRoute = async (req, res, next) => {
   if (!req.auth().isAuthenticated) {
    return res.status(401).json({ massage: "Unauthorized - you must be logged in"})
   }
   next();
}