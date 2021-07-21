const express = require('express');

const router = express.Router();

const locationStorage = {
  locations: [],
};

router.post('/add-location', (req, res, next) => {
  const id = Math.random();
  locationStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  res.json({ message: 'Stored location!', locId: id });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = +req.params.lid;
  const location = locationStorage.locations.find(loc => loc.id === locationId);

  if(!location) {
    return res.status(404).json({
      message: 'Not found!'
    });
  }

  return res.json({
    address: location.address,
    coords: location.coords
  })
});

module.exports = router;
