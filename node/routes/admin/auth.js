import express from "express";
const router = express.Router();

router.route("/").get((req, res) => {
  return res.json({ done: "Checking Successfull!" });
});

export default router;
