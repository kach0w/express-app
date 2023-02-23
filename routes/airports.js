const { Router } = require('express');

const router = Router();

const airports = [
    {
        name: 'SFO',
    },
    {
        name: 'OAK',
    },
];


router.get('', (req, res) => { 
    res.send(airports);
})

module.exports = router;
