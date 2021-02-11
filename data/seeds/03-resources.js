exports.seed = function(knex) {
    return knex('resources').insert([

        {name: 'Learn HTML', description: `https://www.w3schools.com/html/ `},
        {name: 'Learn CSS', description: `https://www.w3schools.com/css/ `},
        {name: 'Learn React/Redux', description: `https://medium.com/netscape/beginners-guide-to-react-redux-how-to-start-learning-and-not-be-overwhelmed-af04353101e `},
        {name: 'Learn SQL', description: `https://www.sqlitetutorial.net/ `},
      
      
    ]);
  };