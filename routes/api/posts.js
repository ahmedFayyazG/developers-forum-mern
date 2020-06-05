const express = require("express");
const router = express.Router();

//Route     Get api/posts/test
// @desc    Tests posts routes
//@access   Public Route
router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

module.exports = router;
