const { Router } = require('express')

const router = Router();

const flights = [
    {
      airline: 'Alaska',
      number: 1,
    }
  ];

router.get('/flights', (req, res, ) => {
    res.send(flights);
});

router.get('/flights/:airline', (req, res) => {
  // console.log(req.params.number);
  const { airline } = req.params;
  const flight = flights.find((f) => f.airline === airline);
  res.send(flight);
  res.send(200);
});

router.post('/flights', (req, res) => {
  console.log(req.body);
  flights.push(req.body);
  res.send(201);
});

module.exports = router;