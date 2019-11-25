
exports.up = function(knex) {
  return ( 
      knex.schema
      .createTable(`projects`, tbl => {
          tbl.increments();

          tbl.string(`name`).notNullable();
          tbl.string(`description`);
          tbl.boolean("completed").defaultTo(false);
      })
      .createTable(`resources`, tbl => {
          tbl.increments();
          tbl.string(`name`)
          .notNullable()
          .unique();
          tbl.string(`description`);
      })
      .createTable("tasks", tbl => {
          tbl.increments();

          tbl.string(`description`).notNullable();
          tbl.string(`notes`);
          tbl.boolean(`completed`).defaultTo(false);
          tbl.integer(`project_id`)
          .notNullable()
          .unsigned()
          .references()
          .inTable(`projects`);
      })
      .createTable(`prim_connection`, tbl => {
          tbl
          .integer(`project_id`)
          .unsigned()
          .notNullable()
          .references(`projects.id`);

          tbl.integer(`resources_id`)
          .unsigned()
          .notNullable()
          .references(`resources.id`);

          tbl.primary([`project_id`, `resources_id`]);
      })
      
      
      );

};

exports.down = function(knex) {
  return(
      knex.schems
      .dropTableIfExists(`prim_connection`)
      .dropTableIfExists(`tasks`)
      .dropTableIfExists(`resources`)
      .dropTableIfExists(`projects`)
  );
};
