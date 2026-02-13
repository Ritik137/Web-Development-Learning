import jwt from "jsonwebtoken";
import { User } from "../Models/UserModel.js";

export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers["authorization"]; // standard header

  if (!authHeader) {
    return res.status(401).json({ message: "Login first...", success: false });
  }

  const token = authHeader.split(" ")[1]; // "Bearer <token>"

  try {
    const decoded = jwt.verify(token, "Anshritik1@()");
    const id = decoded.userId;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found...", success: false });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", success: false, error: error.message });
  }
};