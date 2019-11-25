
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
          tbl.bolean(`completed`).defaultTo(false);
          tbl.integer(`project_id`)
          .notNullable()
          .unsigned()
          .references(`id`)
          .inTable(`projects`);
      })
      .createTable(`prim_connection`, tbl => {
          tbl.increments();
          tbl
          .integer(`project_id`)
          .unsigned()
          .notNullable()
          .references(`id`)
          .inTable(`projects`);

          tbl.integer(`resources_id`)
          .unsigned()
          .notNullable()
          .references(id)
          .integer(resources);
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
