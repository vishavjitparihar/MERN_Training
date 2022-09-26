
// Router functions mostly the same as amy app object, but it is only for a subsection of the app
const router = require('express').Router();


// This is technically /condiments
router.get('/', (req, res) => {
    res.send('router')
});

module.exports = router;