const express = require('express');
const path = require('path');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});

router.get('/api/getMeals',
  controller.getMeals,
  (req, res) => {
    res.sendStatus(200);
  }
);

router.post('/api/saveMeal',
  controller.saveMeal,
  (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = router;