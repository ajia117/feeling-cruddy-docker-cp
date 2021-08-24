
exports.up = function(knex) {
  return knex.schema
    .createTable('mood', function(table) {
        table.increments('id');
        table.string('first_name', 255).notNullable();
        table.string('current_mood',255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("mood")
}