exports.up = function(knex, Promise) {
  return knex.schema.withSchema('public').createTable('deleted_users', function (table) {
    table.integer('id').primary();
    table.string('firstName');
    table.string('lastName');
    table.string('email');
    table.string('userName');
    table.string('phoneNumber');
    table.string('password');
    table.string('user_roles');
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return  knex.schema.withSchema('public').dropTable('deleted_users')
};
