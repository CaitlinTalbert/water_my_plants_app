const verifyPlantInputs = async (req, res, next) => {
  const { nickname, species, h2oFrequency } = req.body;

  if (!nickname || !species || !h2oFrequency) {
    next({ message: "Please enter the required information!" });
  } else {
    next();
  }
};

module.exports = {
  verifyPlantInputs,
};
