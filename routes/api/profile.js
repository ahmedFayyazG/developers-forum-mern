const express = require("express");
const router = express.Router();

//Route     Get api/profile/test
// @desc    Tests profile routes
//@access   Public Route
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
