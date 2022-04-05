const db = require("../data/db-config");

const getAllPlants = async () => {
  let result = await db("plants").select(
    "plants.plant_id",
    "plants.nickname",
    "plants.species",
    "plants.h2oFrequency"
  );
  return result;
};

const findById = async (plant_id) => {
  return db("plants").where("plant_id", plant_id).first();
};

const createPlant = async (plant) => {
  let result = await db("plant").insert(plant, [
    "plant_id",
    "nickname",
    "species",
    "h2oFrequency",
  ]);
  return findById(result);
};

const updatePlant = async (plant, plant_id) => {
  let result = await db("plants")
    .where("plant_id", plant_id)
    .update(plant, ["plant_id", "nickname", "species", "h2oFrequency"]);
  return result;
};

const deletePlantById = async (plant_id) => {
  let result = await db("plants")
    .where("plant_id", plant_id)
    .del(["plant_id", "nickname", "species", "h2oFrequency"]);
  return result;
};

module.exports = {
  getAllPlants,
  findById,
  createPlant,
  updatePlant,
  deletePlantById,
};
