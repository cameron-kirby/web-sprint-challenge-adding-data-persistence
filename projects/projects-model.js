const knex = require('knex');

const db = require("../data/db-config.js")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function add(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return findById(ids[0]);
        });
}

function update(changes, id) {
    return db('projects')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}

function remove(id) {
    return db('projects')
        .where('id', id)
        .del();
}