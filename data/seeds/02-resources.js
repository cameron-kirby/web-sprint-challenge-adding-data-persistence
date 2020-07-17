
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: 'Coffee',
      description: 'Helps you focus'
    },
    {
      name: 'Lights',
    },
    {
      name: 'Ladder',
    },
  ]);
};
