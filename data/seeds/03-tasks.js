
exports.seed = function(knex) {
  return knex("tasks").insert([
      {
        project_id: 1,
        description: "Go to store",
        notes: "Enjoy the walk"
      },
      {
        project_id: 1,
        description: "Pick up coffee",
        notes: "Don't cheap out"
      },
      {
        project_id: 1,
        description: "Go back to office",
        notes: "Enjoy the walk"
      },
      {
        project_id: 2,
        description: "Grab ladder",
      },
      {
        project_id: 2,
        description: "Replace light fixture",
        notes: "Let there be light!"
      },
      {
        project_id: 3,
        description: "Go to the conference room",
        notes: "Arrive fashionably late"
      },
  ]);
};
