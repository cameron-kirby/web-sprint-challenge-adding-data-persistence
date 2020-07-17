
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Get more coffee',
      description: 'The office really needs it'
    },
    {
      name: 'Fix light fixture',
      description: "We've been working in the dark for days"
    },
    {
      name: 'Go to meeting',
      description: "To chat about business deals"
    },
  ]);
};
