import express from "express";
let router = express.Router();

import myDB from "../db/myMongoDb.js";

/* GET home page. */
router.get("/api/photos", async function (req, res) {
  // Consider validating the input
  const query = req.query.query || "";

  console.log("/api/photos query", query);

  try {
    const photos = await myDB.getPhotos({query});
    console.log("got photos",photos.length);
    res.status(200).json({ photos });
  } catch (err) {
    console.log("error getting photos", err);
    return res.status(400).json({ error: err });
  }
});

export default router;
