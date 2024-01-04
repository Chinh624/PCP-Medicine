const express = require("express");
const router = new express.Router();
const { sendEmail } = require("../controllers/controller");

router.post("/register", sendEmail);

router.use("/", (req, res) => {
  res.send({
    token: "test123",
  });
});

module.exports = router;
