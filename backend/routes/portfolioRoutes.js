import { Router } from "express";
import { contact } from "../controllers/contact.js";
import cors from "cors";

const router = Router();
router.use(cors({ origin: "http://localhost:3000", credentials: true }));
router.post("/contact", contact);

export default router;
