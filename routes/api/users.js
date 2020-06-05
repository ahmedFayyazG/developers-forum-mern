const express = require("express");
const router = express.Router();

//Route     Get api/users/test
// @desc    Tests Users routes
//@access   Public Route
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
