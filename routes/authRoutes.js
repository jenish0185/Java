const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/authController");

const router = express.Router();

// Signup route with validation
router.post(
  "/signup",
  [
    // Validation checks
    body("username")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long")
      .trim(),
    body("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/\d/)
      .withMessage("Password must contain at least one number")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[@$!%*?&#]/)
      .withMessage("Password must contain at least one special character"),
  ],
  authController.signup
);

module.exports = router;
