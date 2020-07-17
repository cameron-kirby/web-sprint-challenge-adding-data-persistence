const knex = require('knex');

const db = require("../data/db-config.js")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

// function findSteps(id) {
//     return db("projects")
//         .join("steps", "steps.scheme_id", "schemes.id")
//         .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
//         .where("steps.scheme_id", "=", Number(id))
//         .orderBy("steps.step_number");
// }

function find() {
    return db('tasks')
        .join("projects", "tasks.project_id", "projects.id")
        .select("tasks.*", "projects.name as projectName", "projects.description as projectDesc")
}

function findById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function add(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return findById(ids[0]);
        });
}

function update(changes, id) {
    return db('tasks')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        });
}

function remove(id) {
    return db('tasks')
        .where('id', id)
        .del();
}