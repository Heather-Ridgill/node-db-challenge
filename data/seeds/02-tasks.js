exports.seed = function(knex) {
    return knex('tasks').insert([
      {description: 'Learn to be a Web Developer', notes: `Get ready for the journey! `, project_id: `1`},
      {description: 'Lets start HTML', notes: `When life was easier `, project_id: `2`},
      {description: 'Now onto CSS', notes: ` `, project_id: `2`},
      {description: 'Front-End', notes: `Only go up from here - start googling!  `, project_id: `3`},
      
    ]);
  };