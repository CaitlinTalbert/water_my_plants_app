/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").then(function () {
    // Inserts seed entries
    return knex("users").insert([
      {
        username: "momo",
        phoneNumber: "2104152374",
        password: "momoisthebest",
      },
      {
        username: "kiki",
        phoneNumber: "2104152375",
        password: "kikiisthebest",
      },
      {
        username: "osito",
        phoneNumber: "2104152376",
        password: "ositoisthebest",
      },
    ]);
  });
};
