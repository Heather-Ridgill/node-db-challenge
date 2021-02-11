
exports.seed = function(knex) {
    return knex('projects').insert([
      {name: 'Clean Kitchen', description: `Dishes, Sweep, Mop`, completed: `0`},
      {name: 'Clean Bedroom', description: `Make bed, put toys away`, completed: `0`},
      {name: 'Clean Living Room', description: `Vacuum, Wipe down table, clean window`, completed: `0`},
      {name: 'Clean Bathroom', description: `Sink, Toilet, sweep, mop`, completed: `0`},
      
    ]);
  };