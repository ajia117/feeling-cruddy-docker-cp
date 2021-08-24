
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mood').del()
    .then(function () {
      // Inserts seed entries
      return knex('mood').insert([
        {first_name: 'Zach', current_mood: 'Happy'},
        {first_name: 'Greg', current_mood: 'Dissapointed'},
        {first_name: 'Jeff', current_mood: 'Chill'}
      ]);
    });
};
