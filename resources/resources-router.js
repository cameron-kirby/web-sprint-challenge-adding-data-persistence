const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.post('/', (req, res) => {
    Resources.add(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add resource' });
        });
});

module.exports = router;