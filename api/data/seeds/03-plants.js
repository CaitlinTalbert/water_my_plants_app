exports.seed = function (knex) {
  return knex("plants")
    .truncate()
    .then(function () {
      return knex("plants").insert([
        {
          user_id: 1,
          nickname: "Anemiaceae",
          species: "Pteridophytes",
          h2oFrequency: "Everyday",
        },
        {
          user_id: 2,
          nickname: "Splachnaceae",
          species: "Bryophytes",
          h2oFrequency: "Everyday",
        },
        {
          user_id: 3,
          nickname: "Agave",
          species: "Angiosperms",
          h2oFrequency: "Once a week",
        },
      ]);
    });
};
