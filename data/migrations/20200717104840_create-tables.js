
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .notNullable();
            tbl.text('description', 128)
            tbl.boolean('completed').defaultTo(0)
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('name', 128)
                .notNullable();
            tbl.text('description', 128)
        })
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.text('description')
                .notNullable();
            tbl.text('notes')
            tbl.boolean('completed').defaultTo(0)
        })
        .createTable('projectsUsingResources', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projectsUsingResources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };
  