const router = require("express").Router();
const Plant = require("./plants-model");

//get all plants
router.get("/", async (req, res) => {
  try {
    Plant.getAllPlants().then((plants) => {
      res.status(200).json(plants);
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//get plant by ID

//insert new plant

//update a plant

//delete a plant

module.exports = router;
