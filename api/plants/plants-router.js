const router = require("express").Router();
const { verifyPlantInputs } = require("./plants-middleware");
const Plant = require("./plants-model");
const { restricted } = require("../restricted");

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
router.get("/:plant_id", restricted, (req, res, next) => {
  Plant.findById(req.params.plant_id)
    .then((plant) => {
      res.json(plant);
    })
    .catch(next);
});

//create new plant
router.post("/", restricted, verifyPlantInputs, async (req, res) => {
  try {
    Plant.createPlant(req.body, { user_id: 1 }).then((plant) =>
      res.json(plant)
    );
  } catch (err) {
    res.status(600).json({
      message: "Invalid Request",
    });
  }
});

//update a plant
router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  try {
    Plant.updatePlant(id, req.body).then((plant) => {
      res.json(plant);
    });
  } catch (err) {
    res.status(400).json({
      message: "Invalid Entries",
    });
  }
});

//delete a plant
router.delete("/remove/:plant_id", restricted, async (req, res, next) => {
  try {
    const { plant_id } = req.params;
    Plant.deletePlantById(plant_id)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
