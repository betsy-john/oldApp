
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('public').createTable('doctors', function (table) {
        table.increments();
        table.string('firstName');
        table.string('lastName');
        table.string('email');
        table.string('userName');
        table.string('phoneNumber');
        table.string('password');
        table.string('hospital_name');
        table.string('hospital_id');
        table.string('emp_id');
        table.string('user_roles');
        table.timestamps();
      })
};

exports.down = function(knex, Promise) {
    return  knex.schema.withSchema('public').dropTable('doctors')

};
