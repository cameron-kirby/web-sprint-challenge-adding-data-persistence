const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.post('/', (req, res) => {
    Projects.add(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add project' });
        });
});

module.exports = router;