const express = require('express');
const router = express.Router();


// Define routes
router.get('/home', (req, res) => {
  res.send(' home page');
});

router.get('/student', (req, res) => {
  res.send(`Student data`);
});

module.exports = router;