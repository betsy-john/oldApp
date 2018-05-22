
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', function (table) {
        table.increments();
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
  return  knex.schema.dropTable('users')
  
};
