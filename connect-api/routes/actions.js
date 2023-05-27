import express from "express";
import { getActions, addAction, deleteAction } from "../controllers/action.js";

const router = express.Router();

router.get("/", getActions);
router.post("/", addAction);
router.delete("/:id", deleteAction);

export default router;
