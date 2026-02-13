import express from "express";
import {
  deleteContactById,
  getAllContacts,
  getContactbyId,
  newContact,
  updateContactById,
} from "../Controller/ContactController.js";
import { isAuthenticated } from "../Middleware/Auth.js";

const router = express.Router();

// Protected routes
router.post("/new", isAuthenticated, newContact);
router.put("/update/:id", isAuthenticated, updateContactById);
router.delete("/delete/:id", isAuthenticated, deleteContactById);

// Public routes
router.get("/get/all", getAllContacts);
router.get("/get/contact/:id", getContactbyId);

export default router;